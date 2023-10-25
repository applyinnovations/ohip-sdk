# PostConfigActivityLogRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConfigActivities** | Pointer to [**[]ConfigActivityType**](ConfigActivityType.md) | Changes log record to import/Export/Delete customization operations. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostConfigActivityLogRequest

`func NewPostConfigActivityLogRequest() *PostConfigActivityLogRequest`

NewPostConfigActivityLogRequest instantiates a new PostConfigActivityLogRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostConfigActivityLogRequestWithDefaults

`func NewPostConfigActivityLogRequestWithDefaults() *PostConfigActivityLogRequest`

NewPostConfigActivityLogRequestWithDefaults instantiates a new PostConfigActivityLogRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfigActivities

`func (o *PostConfigActivityLogRequest) GetConfigActivities() []ConfigActivityType`

GetConfigActivities returns the ConfigActivities field if non-nil, zero value otherwise.

### GetConfigActivitiesOk

`func (o *PostConfigActivityLogRequest) GetConfigActivitiesOk() (*[]ConfigActivityType, bool)`

GetConfigActivitiesOk returns a tuple with the ConfigActivities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfigActivities

`func (o *PostConfigActivityLogRequest) SetConfigActivities(v []ConfigActivityType)`

SetConfigActivities sets ConfigActivities field to given value.

### HasConfigActivities

`func (o *PostConfigActivityLogRequest) HasConfigActivities() bool`

HasConfigActivities returns a boolean if a field has been set.

### GetWarnings

`func (o *PostConfigActivityLogRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostConfigActivityLogRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostConfigActivityLogRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostConfigActivityLogRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


