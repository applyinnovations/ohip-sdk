# RestrictionsHistory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RestrictionsHistory** | Pointer to [**FetchRestrictionsHistoryRSType**](FetchRestrictionsHistoryRSType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRestrictionsHistory

`func NewRestrictionsHistory() *RestrictionsHistory`

NewRestrictionsHistory instantiates a new RestrictionsHistory object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRestrictionsHistoryWithDefaults

`func NewRestrictionsHistoryWithDefaults() *RestrictionsHistory`

NewRestrictionsHistoryWithDefaults instantiates a new RestrictionsHistory object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRestrictionsHistory

`func (o *RestrictionsHistory) GetRestrictionsHistory() FetchRestrictionsHistoryRSType`

GetRestrictionsHistory returns the RestrictionsHistory field if non-nil, zero value otherwise.

### GetRestrictionsHistoryOk

`func (o *RestrictionsHistory) GetRestrictionsHistoryOk() (*FetchRestrictionsHistoryRSType, bool)`

GetRestrictionsHistoryOk returns a tuple with the RestrictionsHistory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestrictionsHistory

`func (o *RestrictionsHistory) SetRestrictionsHistory(v FetchRestrictionsHistoryRSType)`

SetRestrictionsHistory sets RestrictionsHistory field to given value.

### HasRestrictionsHistory

`func (o *RestrictionsHistory) HasRestrictionsHistory() bool`

HasRestrictionsHistory returns a boolean if a field has been set.

### GetLinks

`func (o *RestrictionsHistory) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RestrictionsHistory) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RestrictionsHistory) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RestrictionsHistory) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RestrictionsHistory) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RestrictionsHistory) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RestrictionsHistory) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RestrictionsHistory) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


