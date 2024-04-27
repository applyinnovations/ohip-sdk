# BlockStatusCodeDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockStatusCode** | Pointer to [**BlockStatusCodeType**](BlockStatusCodeType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBlockStatusCodeDetails

`func NewBlockStatusCodeDetails() *BlockStatusCodeDetails`

NewBlockStatusCodeDetails instantiates a new BlockStatusCodeDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockStatusCodeDetailsWithDefaults

`func NewBlockStatusCodeDetailsWithDefaults() *BlockStatusCodeDetails`

NewBlockStatusCodeDetailsWithDefaults instantiates a new BlockStatusCodeDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockStatusCode

`func (o *BlockStatusCodeDetails) GetBlockStatusCode() BlockStatusCodeType`

GetBlockStatusCode returns the BlockStatusCode field if non-nil, zero value otherwise.

### GetBlockStatusCodeOk

`func (o *BlockStatusCodeDetails) GetBlockStatusCodeOk() (*BlockStatusCodeType, bool)`

GetBlockStatusCodeOk returns a tuple with the BlockStatusCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockStatusCode

`func (o *BlockStatusCodeDetails) SetBlockStatusCode(v BlockStatusCodeType)`

SetBlockStatusCode sets BlockStatusCode field to given value.

### HasBlockStatusCode

`func (o *BlockStatusCodeDetails) HasBlockStatusCode() bool`

HasBlockStatusCode returns a boolean if a field has been set.

### GetLinks

`func (o *BlockStatusCodeDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BlockStatusCodeDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BlockStatusCodeDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BlockStatusCodeDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BlockStatusCodeDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BlockStatusCodeDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BlockStatusCodeDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BlockStatusCodeDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


