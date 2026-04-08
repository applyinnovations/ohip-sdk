# StatisticType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Statistics** | Pointer to [**[]StatisticCodeType**](StatisticCodeType.md) | Statistic Codes. | [optional] 
**HotelName** | Pointer to **string** | A text field used to communicate the proper name of the hotel. | [optional] 
**ReportCode** | Pointer to **string** | Identifies the type of statistics collected. Each ReportCode corresponds to a set of category summaries based upon a predetermined agreement. | [optional] 
**Description** | Pointer to **string** | This element has revenue amount data for its revenue category such as Room Revenue, Food and Beverage Revenue. | [optional] 

## Methods

### NewStatisticType

`func NewStatisticType() *StatisticType`

NewStatisticType instantiates a new StatisticType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStatisticTypeWithDefaults

`func NewStatisticTypeWithDefaults() *StatisticType`

NewStatisticTypeWithDefaults instantiates a new StatisticType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatistics

`func (o *StatisticType) GetStatistics() []StatisticCodeType`

GetStatistics returns the Statistics field if non-nil, zero value otherwise.

### GetStatisticsOk

`func (o *StatisticType) GetStatisticsOk() (*[]StatisticCodeType, bool)`

GetStatisticsOk returns a tuple with the Statistics field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatistics

`func (o *StatisticType) SetStatistics(v []StatisticCodeType)`

SetStatistics sets Statistics field to given value.

### HasStatistics

`func (o *StatisticType) HasStatistics() bool`

HasStatistics returns a boolean if a field has been set.

### GetHotelName

`func (o *StatisticType) GetHotelName() string`

GetHotelName returns the HotelName field if non-nil, zero value otherwise.

### GetHotelNameOk

`func (o *StatisticType) GetHotelNameOk() (*string, bool)`

GetHotelNameOk returns a tuple with the HotelName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelName

`func (o *StatisticType) SetHotelName(v string)`

SetHotelName sets HotelName field to given value.

### HasHotelName

`func (o *StatisticType) HasHotelName() bool`

HasHotelName returns a boolean if a field has been set.

### GetReportCode

`func (o *StatisticType) GetReportCode() string`

GetReportCode returns the ReportCode field if non-nil, zero value otherwise.

### GetReportCodeOk

`func (o *StatisticType) GetReportCodeOk() (*string, bool)`

GetReportCodeOk returns a tuple with the ReportCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportCode

`func (o *StatisticType) SetReportCode(v string)`

SetReportCode sets ReportCode field to given value.

### HasReportCode

`func (o *StatisticType) HasReportCode() bool`

HasReportCode returns a boolean if a field has been set.

### GetDescription

`func (o *StatisticType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *StatisticType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *StatisticType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *StatisticType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


