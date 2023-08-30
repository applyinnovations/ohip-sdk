# BlockCodeToValidate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**BlockIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**StartDate** | Pointer to **string** | Start date for this block. | [optional] 
**EndDate** | Pointer to **string** | End date for this block. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBlockCodeToValidate

`func NewBlockCodeToValidate() *BlockCodeToValidate`

NewBlockCodeToValidate instantiates a new BlockCodeToValidate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockCodeToValidateWithDefaults

`func NewBlockCodeToValidateWithDefaults() *BlockCodeToValidate`

NewBlockCodeToValidateWithDefaults instantiates a new BlockCodeToValidate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *BlockCodeToValidate) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *BlockCodeToValidate) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *BlockCodeToValidate) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *BlockCodeToValidate) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetBlockIdList

`func (o *BlockCodeToValidate) GetBlockIdList() []UniqueIDType`

GetBlockIdList returns the BlockIdList field if non-nil, zero value otherwise.

### GetBlockIdListOk

`func (o *BlockCodeToValidate) GetBlockIdListOk() (*[]UniqueIDType, bool)`

GetBlockIdListOk returns a tuple with the BlockIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockIdList

`func (o *BlockCodeToValidate) SetBlockIdList(v []UniqueIDType)`

SetBlockIdList sets BlockIdList field to given value.

### HasBlockIdList

`func (o *BlockCodeToValidate) HasBlockIdList() bool`

HasBlockIdList returns a boolean if a field has been set.

### GetStartDate

`func (o *BlockCodeToValidate) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *BlockCodeToValidate) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *BlockCodeToValidate) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *BlockCodeToValidate) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetEndDate

`func (o *BlockCodeToValidate) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *BlockCodeToValidate) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *BlockCodeToValidate) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *BlockCodeToValidate) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetLinks

`func (o *BlockCodeToValidate) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BlockCodeToValidate) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BlockCodeToValidate) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BlockCodeToValidate) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BlockCodeToValidate) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BlockCodeToValidate) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BlockCodeToValidate) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BlockCodeToValidate) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


