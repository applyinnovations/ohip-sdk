# RecentlyAccessedActivities

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Activities** | Pointer to [**[]RecentlyAccessedActivityType**](RecentlyAccessedActivityType.md) | A single recently accessed activity. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRecentlyAccessedActivities

`func NewRecentlyAccessedActivities() *RecentlyAccessedActivities`

NewRecentlyAccessedActivities instantiates a new RecentlyAccessedActivities object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRecentlyAccessedActivitiesWithDefaults

`func NewRecentlyAccessedActivitiesWithDefaults() *RecentlyAccessedActivities`

NewRecentlyAccessedActivitiesWithDefaults instantiates a new RecentlyAccessedActivities object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivities

`func (o *RecentlyAccessedActivities) GetActivities() []RecentlyAccessedActivityType`

GetActivities returns the Activities field if non-nil, zero value otherwise.

### GetActivitiesOk

`func (o *RecentlyAccessedActivities) GetActivitiesOk() (*[]RecentlyAccessedActivityType, bool)`

GetActivitiesOk returns a tuple with the Activities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivities

`func (o *RecentlyAccessedActivities) SetActivities(v []RecentlyAccessedActivityType)`

SetActivities sets Activities field to given value.

### HasActivities

`func (o *RecentlyAccessedActivities) HasActivities() bool`

HasActivities returns a boolean if a field has been set.

### GetLinks

`func (o *RecentlyAccessedActivities) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RecentlyAccessedActivities) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RecentlyAccessedActivities) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RecentlyAccessedActivities) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RecentlyAccessedActivities) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RecentlyAccessedActivities) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RecentlyAccessedActivities) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RecentlyAccessedActivities) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


