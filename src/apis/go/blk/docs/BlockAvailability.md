# BlockAvailability

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockAvailability** | Pointer to [**BlockAvailabilityType**](BlockAvailabilityType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBlockAvailability

`func NewBlockAvailability() *BlockAvailability`

NewBlockAvailability instantiates a new BlockAvailability object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockAvailabilityWithDefaults

`func NewBlockAvailabilityWithDefaults() *BlockAvailability`

NewBlockAvailabilityWithDefaults instantiates a new BlockAvailability object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockAvailability

`func (o *BlockAvailability) GetBlockAvailability() BlockAvailabilityType`

GetBlockAvailability returns the BlockAvailability field if non-nil, zero value otherwise.

### GetBlockAvailabilityOk

`func (o *BlockAvailability) GetBlockAvailabilityOk() (*BlockAvailabilityType, bool)`

GetBlockAvailabilityOk returns a tuple with the BlockAvailability field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockAvailability

`func (o *BlockAvailability) SetBlockAvailability(v BlockAvailabilityType)`

SetBlockAvailability sets BlockAvailability field to given value.

### HasBlockAvailability

`func (o *BlockAvailability) HasBlockAvailability() bool`

HasBlockAvailability returns a boolean if a field has been set.

### GetLinks

`func (o *BlockAvailability) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BlockAvailability) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BlockAvailability) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BlockAvailability) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BlockAvailability) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BlockAvailability) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BlockAvailability) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BlockAvailability) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


