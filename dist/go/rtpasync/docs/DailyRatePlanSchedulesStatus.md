# DailyRatePlanSchedulesStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 

## Methods

### NewDailyRatePlanSchedulesStatus

`func NewDailyRatePlanSchedulesStatus() *DailyRatePlanSchedulesStatus`

NewDailyRatePlanSchedulesStatus instantiates a new DailyRatePlanSchedulesStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDailyRatePlanSchedulesStatusWithDefaults

`func NewDailyRatePlanSchedulesStatusWithDefaults() *DailyRatePlanSchedulesStatus`

NewDailyRatePlanSchedulesStatusWithDefaults instantiates a new DailyRatePlanSchedulesStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWarnings

`func (o *DailyRatePlanSchedulesStatus) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *DailyRatePlanSchedulesStatus) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *DailyRatePlanSchedulesStatus) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *DailyRatePlanSchedulesStatus) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.

### GetLinks

`func (o *DailyRatePlanSchedulesStatus) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *DailyRatePlanSchedulesStatus) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *DailyRatePlanSchedulesStatus) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *DailyRatePlanSchedulesStatus) HasLinks() bool`

HasLinks returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


