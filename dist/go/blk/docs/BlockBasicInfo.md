# BlockBasicInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockName** | Pointer to **string** | Name of the block. This is used for generating the default block code | [optional] 
**StartDate** | Pointer to **string** | Start date of the block. This is used for generatting the default block code | [optional] 
**HotelId** | Pointer to **string** | Hotel where the block will be created | [optional] 
**BlockCodeTemplate** | Pointer to **string** | Format in which the Block Code should be generated. | [optional] 
**BlockCode** | Pointer to **string** | Response object that returns a default block code based on template | [optional] 

## Methods

### NewBlockBasicInfo

`func NewBlockBasicInfo() *BlockBasicInfo`

NewBlockBasicInfo instantiates a new BlockBasicInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockBasicInfoWithDefaults

`func NewBlockBasicInfoWithDefaults() *BlockBasicInfo`

NewBlockBasicInfoWithDefaults instantiates a new BlockBasicInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockName

`func (o *BlockBasicInfo) GetBlockName() string`

GetBlockName returns the BlockName field if non-nil, zero value otherwise.

### GetBlockNameOk

`func (o *BlockBasicInfo) GetBlockNameOk() (*string, bool)`

GetBlockNameOk returns a tuple with the BlockName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockName

`func (o *BlockBasicInfo) SetBlockName(v string)`

SetBlockName sets BlockName field to given value.

### HasBlockName

`func (o *BlockBasicInfo) HasBlockName() bool`

HasBlockName returns a boolean if a field has been set.

### GetStartDate

`func (o *BlockBasicInfo) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *BlockBasicInfo) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *BlockBasicInfo) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *BlockBasicInfo) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetHotelId

`func (o *BlockBasicInfo) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *BlockBasicInfo) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *BlockBasicInfo) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *BlockBasicInfo) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetBlockCodeTemplate

`func (o *BlockBasicInfo) GetBlockCodeTemplate() string`

GetBlockCodeTemplate returns the BlockCodeTemplate field if non-nil, zero value otherwise.

### GetBlockCodeTemplateOk

`func (o *BlockBasicInfo) GetBlockCodeTemplateOk() (*string, bool)`

GetBlockCodeTemplateOk returns a tuple with the BlockCodeTemplate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockCodeTemplate

`func (o *BlockBasicInfo) SetBlockCodeTemplate(v string)`

SetBlockCodeTemplate sets BlockCodeTemplate field to given value.

### HasBlockCodeTemplate

`func (o *BlockBasicInfo) HasBlockCodeTemplate() bool`

HasBlockCodeTemplate returns a boolean if a field has been set.

### GetBlockCode

`func (o *BlockBasicInfo) GetBlockCode() string`

GetBlockCode returns the BlockCode field if non-nil, zero value otherwise.

### GetBlockCodeOk

`func (o *BlockBasicInfo) GetBlockCodeOk() (*string, bool)`

GetBlockCodeOk returns a tuple with the BlockCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockCode

`func (o *BlockBasicInfo) SetBlockCode(v string)`

SetBlockCode sets BlockCode field to given value.

### HasBlockCode

`func (o *BlockBasicInfo) HasBlockCode() bool`

HasBlockCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


