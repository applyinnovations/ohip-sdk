# CreateConfigActivityLogCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConfigActivities** | Pointer to [**[]ConfigActivityType**](ConfigActivityType.md) | Changes log record to import/Export/Delete customization operations. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCreateConfigActivityLogCriteria

`func NewCreateConfigActivityLogCriteria() *CreateConfigActivityLogCriteria`

NewCreateConfigActivityLogCriteria instantiates a new CreateConfigActivityLogCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateConfigActivityLogCriteriaWithDefaults

`func NewCreateConfigActivityLogCriteriaWithDefaults() *CreateConfigActivityLogCriteria`

NewCreateConfigActivityLogCriteriaWithDefaults instantiates a new CreateConfigActivityLogCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfigActivities

`func (o *CreateConfigActivityLogCriteria) GetConfigActivities() []ConfigActivityType`

GetConfigActivities returns the ConfigActivities field if non-nil, zero value otherwise.

### GetConfigActivitiesOk

`func (o *CreateConfigActivityLogCriteria) GetConfigActivitiesOk() (*[]ConfigActivityType, bool)`

GetConfigActivitiesOk returns a tuple with the ConfigActivities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfigActivities

`func (o *CreateConfigActivityLogCriteria) SetConfigActivities(v []ConfigActivityType)`

SetConfigActivities sets ConfigActivities field to given value.

### HasConfigActivities

`func (o *CreateConfigActivityLogCriteria) HasConfigActivities() bool`

HasConfigActivities returns a boolean if a field has been set.

### GetWarnings

`func (o *CreateConfigActivityLogCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CreateConfigActivityLogCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CreateConfigActivityLogCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CreateConfigActivityLogCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


