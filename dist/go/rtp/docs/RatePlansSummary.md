# RatePlansSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**MasterInfoList** | Pointer to [**[]MasterInfoType**](MasterInfoType.md) | Refer to Generic common types document. | [optional] 
**RatePlanShortInfoList** | Pointer to [**RatePlansSummaryRatePlanShortInfoList**](RatePlansSummaryRatePlanShortInfoList.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRatePlansSummary

`func NewRatePlansSummary() *RatePlansSummary`

NewRatePlansSummary instantiates a new RatePlansSummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRatePlansSummaryWithDefaults

`func NewRatePlansSummaryWithDefaults() *RatePlansSummary`

NewRatePlansSummaryWithDefaults instantiates a new RatePlansSummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *RatePlansSummary) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RatePlansSummary) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RatePlansSummary) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RatePlansSummary) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMasterInfoList

`func (o *RatePlansSummary) GetMasterInfoList() []MasterInfoType`

GetMasterInfoList returns the MasterInfoList field if non-nil, zero value otherwise.

### GetMasterInfoListOk

`func (o *RatePlansSummary) GetMasterInfoListOk() (*[]MasterInfoType, bool)`

GetMasterInfoListOk returns a tuple with the MasterInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterInfoList

`func (o *RatePlansSummary) SetMasterInfoList(v []MasterInfoType)`

SetMasterInfoList sets MasterInfoList field to given value.

### HasMasterInfoList

`func (o *RatePlansSummary) HasMasterInfoList() bool`

HasMasterInfoList returns a boolean if a field has been set.

### GetRatePlanShortInfoList

`func (o *RatePlansSummary) GetRatePlanShortInfoList() RatePlansSummaryRatePlanShortInfoList`

GetRatePlanShortInfoList returns the RatePlanShortInfoList field if non-nil, zero value otherwise.

### GetRatePlanShortInfoListOk

`func (o *RatePlansSummary) GetRatePlanShortInfoListOk() (*RatePlansSummaryRatePlanShortInfoList, bool)`

GetRatePlanShortInfoListOk returns a tuple with the RatePlanShortInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanShortInfoList

`func (o *RatePlansSummary) SetRatePlanShortInfoList(v RatePlansSummaryRatePlanShortInfoList)`

SetRatePlanShortInfoList sets RatePlanShortInfoList field to given value.

### HasRatePlanShortInfoList

`func (o *RatePlansSummary) HasRatePlanShortInfoList() bool`

HasRatePlanShortInfoList returns a boolean if a field has been set.

### GetWarnings

`func (o *RatePlansSummary) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RatePlansSummary) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RatePlansSummary) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RatePlansSummary) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


