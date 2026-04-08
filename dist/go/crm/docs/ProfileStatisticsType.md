# ProfileStatisticsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfileIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**StayStatisticsSummaryList** | Pointer to [**StatisticsSummaryListType**](StatisticsSummaryListType.md) |  | [optional] 
**StayStatisticsDetailList** | Pointer to [**[]StayStatisticsDetailType**](StayStatisticsDetailType.md) | Collection of stay statistics detail information | [optional] 
**RevenueStatisticsSummaryList** | Pointer to [**[]RevenueStatisticsSummaryType**](RevenueStatisticsSummaryType.md) | List of the detailed and yearly summarized information about the profile revenue. | [optional] 
**ReportType** | Pointer to [**StatisticsReportType**](StatisticsReportType.md) |  | [optional] 

## Methods

### NewProfileStatisticsType

`func NewProfileStatisticsType() *ProfileStatisticsType`

NewProfileStatisticsType instantiates a new ProfileStatisticsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileStatisticsTypeWithDefaults

`func NewProfileStatisticsTypeWithDefaults() *ProfileStatisticsType`

NewProfileStatisticsTypeWithDefaults instantiates a new ProfileStatisticsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProfileIdList

`func (o *ProfileStatisticsType) GetProfileIdList() []UniqueIDType`

GetProfileIdList returns the ProfileIdList field if non-nil, zero value otherwise.

### GetProfileIdListOk

`func (o *ProfileStatisticsType) GetProfileIdListOk() (*[]UniqueIDType, bool)`

GetProfileIdListOk returns a tuple with the ProfileIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileIdList

`func (o *ProfileStatisticsType) SetProfileIdList(v []UniqueIDType)`

SetProfileIdList sets ProfileIdList field to given value.

### HasProfileIdList

`func (o *ProfileStatisticsType) HasProfileIdList() bool`

HasProfileIdList returns a boolean if a field has been set.

### GetStayStatisticsSummaryList

`func (o *ProfileStatisticsType) GetStayStatisticsSummaryList() StatisticsSummaryListType`

GetStayStatisticsSummaryList returns the StayStatisticsSummaryList field if non-nil, zero value otherwise.

### GetStayStatisticsSummaryListOk

`func (o *ProfileStatisticsType) GetStayStatisticsSummaryListOk() (*StatisticsSummaryListType, bool)`

GetStayStatisticsSummaryListOk returns a tuple with the StayStatisticsSummaryList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayStatisticsSummaryList

`func (o *ProfileStatisticsType) SetStayStatisticsSummaryList(v StatisticsSummaryListType)`

SetStayStatisticsSummaryList sets StayStatisticsSummaryList field to given value.

### HasStayStatisticsSummaryList

`func (o *ProfileStatisticsType) HasStayStatisticsSummaryList() bool`

HasStayStatisticsSummaryList returns a boolean if a field has been set.

### GetStayStatisticsDetailList

`func (o *ProfileStatisticsType) GetStayStatisticsDetailList() []StayStatisticsDetailType`

GetStayStatisticsDetailList returns the StayStatisticsDetailList field if non-nil, zero value otherwise.

### GetStayStatisticsDetailListOk

`func (o *ProfileStatisticsType) GetStayStatisticsDetailListOk() (*[]StayStatisticsDetailType, bool)`

GetStayStatisticsDetailListOk returns a tuple with the StayStatisticsDetailList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayStatisticsDetailList

`func (o *ProfileStatisticsType) SetStayStatisticsDetailList(v []StayStatisticsDetailType)`

SetStayStatisticsDetailList sets StayStatisticsDetailList field to given value.

### HasStayStatisticsDetailList

`func (o *ProfileStatisticsType) HasStayStatisticsDetailList() bool`

HasStayStatisticsDetailList returns a boolean if a field has been set.

### GetRevenueStatisticsSummaryList

`func (o *ProfileStatisticsType) GetRevenueStatisticsSummaryList() []RevenueStatisticsSummaryType`

GetRevenueStatisticsSummaryList returns the RevenueStatisticsSummaryList field if non-nil, zero value otherwise.

### GetRevenueStatisticsSummaryListOk

`func (o *ProfileStatisticsType) GetRevenueStatisticsSummaryListOk() (*[]RevenueStatisticsSummaryType, bool)`

GetRevenueStatisticsSummaryListOk returns a tuple with the RevenueStatisticsSummaryList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueStatisticsSummaryList

`func (o *ProfileStatisticsType) SetRevenueStatisticsSummaryList(v []RevenueStatisticsSummaryType)`

SetRevenueStatisticsSummaryList sets RevenueStatisticsSummaryList field to given value.

### HasRevenueStatisticsSummaryList

`func (o *ProfileStatisticsType) HasRevenueStatisticsSummaryList() bool`

HasRevenueStatisticsSummaryList returns a boolean if a field has been set.

### GetReportType

`func (o *ProfileStatisticsType) GetReportType() StatisticsReportType`

GetReportType returns the ReportType field if non-nil, zero value otherwise.

### GetReportTypeOk

`func (o *ProfileStatisticsType) GetReportTypeOk() (*StatisticsReportType, bool)`

GetReportTypeOk returns a tuple with the ReportType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportType

`func (o *ProfileStatisticsType) SetReportType(v StatisticsReportType)`

SetReportType sets ReportType field to given value.

### HasReportType

`func (o *ProfileStatisticsType) HasReportType() bool`

HasReportType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


