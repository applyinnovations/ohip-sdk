# RatePlanSchedulesInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RatePlanMasterInfo** | Pointer to [**RatePlanMasterInfoType**](RatePlanMasterInfoType.md) |  | [optional] 
**RatePlanScheduleList** | Pointer to [**RatePlanScheduleListType**](RatePlanScheduleListType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRatePlanSchedulesInfo

`func NewRatePlanSchedulesInfo() *RatePlanSchedulesInfo`

NewRatePlanSchedulesInfo instantiates a new RatePlanSchedulesInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRatePlanSchedulesInfoWithDefaults

`func NewRatePlanSchedulesInfoWithDefaults() *RatePlanSchedulesInfo`

NewRatePlanSchedulesInfoWithDefaults instantiates a new RatePlanSchedulesInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *RatePlanSchedulesInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RatePlanSchedulesInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RatePlanSchedulesInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RatePlanSchedulesInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRatePlanMasterInfo

`func (o *RatePlanSchedulesInfo) GetRatePlanMasterInfo() RatePlanMasterInfoType`

GetRatePlanMasterInfo returns the RatePlanMasterInfo field if non-nil, zero value otherwise.

### GetRatePlanMasterInfoOk

`func (o *RatePlanSchedulesInfo) GetRatePlanMasterInfoOk() (*RatePlanMasterInfoType, bool)`

GetRatePlanMasterInfoOk returns a tuple with the RatePlanMasterInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanMasterInfo

`func (o *RatePlanSchedulesInfo) SetRatePlanMasterInfo(v RatePlanMasterInfoType)`

SetRatePlanMasterInfo sets RatePlanMasterInfo field to given value.

### HasRatePlanMasterInfo

`func (o *RatePlanSchedulesInfo) HasRatePlanMasterInfo() bool`

HasRatePlanMasterInfo returns a boolean if a field has been set.

### GetRatePlanScheduleList

`func (o *RatePlanSchedulesInfo) GetRatePlanScheduleList() RatePlanScheduleListType`

GetRatePlanScheduleList returns the RatePlanScheduleList field if non-nil, zero value otherwise.

### GetRatePlanScheduleListOk

`func (o *RatePlanSchedulesInfo) GetRatePlanScheduleListOk() (*RatePlanScheduleListType, bool)`

GetRatePlanScheduleListOk returns a tuple with the RatePlanScheduleList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanScheduleList

`func (o *RatePlanSchedulesInfo) SetRatePlanScheduleList(v RatePlanScheduleListType)`

SetRatePlanScheduleList sets RatePlanScheduleList field to given value.

### HasRatePlanScheduleList

`func (o *RatePlanSchedulesInfo) HasRatePlanScheduleList() bool`

HasRatePlanScheduleList returns a boolean if a field has been set.

### GetWarnings

`func (o *RatePlanSchedulesInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RatePlanSchedulesInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RatePlanSchedulesInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RatePlanSchedulesInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


