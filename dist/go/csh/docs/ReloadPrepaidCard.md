# ReloadPrepaidCard

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**ActivatePrepaidCardCriteria**](ActivatePrepaidCardCriteria.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReloadPrepaidCard

`func NewReloadPrepaidCard() *ReloadPrepaidCard`

NewReloadPrepaidCard instantiates a new ReloadPrepaidCard object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReloadPrepaidCardWithDefaults

`func NewReloadPrepaidCardWithDefaults() *ReloadPrepaidCard`

NewReloadPrepaidCardWithDefaults instantiates a new ReloadPrepaidCard object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *ReloadPrepaidCard) GetCriteria() ActivatePrepaidCardCriteria`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *ReloadPrepaidCard) GetCriteriaOk() (*ActivatePrepaidCardCriteria, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *ReloadPrepaidCard) SetCriteria(v ActivatePrepaidCardCriteria)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *ReloadPrepaidCard) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetWarnings

`func (o *ReloadPrepaidCard) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReloadPrepaidCard) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReloadPrepaidCard) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReloadPrepaidCard) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

