# ArAgingCycles

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AgingCycles** | Pointer to [**[]ARAgingType**](ARAgingType.md) | Collections of AR Aging Cycles. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewArAgingCycles

`func NewArAgingCycles() *ArAgingCycles`

NewArAgingCycles instantiates a new ArAgingCycles object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewArAgingCyclesWithDefaults

`func NewArAgingCyclesWithDefaults() *ArAgingCycles`

NewArAgingCyclesWithDefaults instantiates a new ArAgingCycles object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAgingCycles

`func (o *ArAgingCycles) GetAgingCycles() []ARAgingType`

GetAgingCycles returns the AgingCycles field if non-nil, zero value otherwise.

### GetAgingCyclesOk

`func (o *ArAgingCycles) GetAgingCyclesOk() (*[]ARAgingType, bool)`

GetAgingCyclesOk returns a tuple with the AgingCycles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAgingCycles

`func (o *ArAgingCycles) SetAgingCycles(v []ARAgingType)`

SetAgingCycles sets AgingCycles field to given value.

### HasAgingCycles

`func (o *ArAgingCycles) HasAgingCycles() bool`

HasAgingCycles returns a boolean if a field has been set.

### GetLinks

`func (o *ArAgingCycles) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ArAgingCycles) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ArAgingCycles) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ArAgingCycles) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ArAgingCycles) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ArAgingCycles) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ArAgingCycles) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ArAgingCycles) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


