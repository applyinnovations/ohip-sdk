# ReservationStatistics

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StatisticsType** | Pointer to [**[]StatisticType**](StatisticType.md) | Collection of statistic data of a reservation. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReservationStatistics

`func NewReservationStatistics() *ReservationStatistics`

NewReservationStatistics instantiates a new ReservationStatistics object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationStatisticsWithDefaults

`func NewReservationStatisticsWithDefaults() *ReservationStatistics`

NewReservationStatisticsWithDefaults instantiates a new ReservationStatistics object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatisticsType

`func (o *ReservationStatistics) GetStatisticsType() []StatisticType`

GetStatisticsType returns the StatisticsType field if non-nil, zero value otherwise.

### GetStatisticsTypeOk

`func (o *ReservationStatistics) GetStatisticsTypeOk() (*[]StatisticType, bool)`

GetStatisticsTypeOk returns a tuple with the StatisticsType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatisticsType

`func (o *ReservationStatistics) SetStatisticsType(v []StatisticType)`

SetStatisticsType sets StatisticsType field to given value.

### HasStatisticsType

`func (o *ReservationStatistics) HasStatisticsType() bool`

HasStatisticsType returns a boolean if a field has been set.

### GetLinks

`func (o *ReservationStatistics) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReservationStatistics) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReservationStatistics) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReservationStatistics) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ReservationStatistics) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReservationStatistics) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReservationStatistics) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReservationStatistics) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


