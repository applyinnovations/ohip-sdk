# StatesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**States** | Pointer to [**StatesType**](StatesType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewStatesCriteria

`func NewStatesCriteria() *StatesCriteria`

NewStatesCriteria instantiates a new StatesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStatesCriteriaWithDefaults

`func NewStatesCriteriaWithDefaults() *StatesCriteria`

NewStatesCriteriaWithDefaults instantiates a new StatesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *StatesCriteria) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *StatesCriteria) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *StatesCriteria) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *StatesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetStates

`func (o *StatesCriteria) GetStates() StatesType`

GetStates returns the States field if non-nil, zero value otherwise.

### GetStatesOk

`func (o *StatesCriteria) GetStatesOk() (*StatesType, bool)`

GetStatesOk returns a tuple with the States field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStates

`func (o *StatesCriteria) SetStates(v StatesType)`

SetStates sets States field to given value.

### HasStates

`func (o *StatesCriteria) HasStates() bool`

HasStates returns a boolean if a field has been set.

### GetWarnings

`func (o *StatesCriteria) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *StatesCriteria) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *StatesCriteria) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *StatesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


