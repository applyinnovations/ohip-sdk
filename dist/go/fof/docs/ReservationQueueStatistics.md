# ReservationQueueStatistics

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Statistics** | Pointer to [**ReservationQueueStatisticsType**](ReservationQueueStatisticsType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReservationQueueStatistics

`func NewReservationQueueStatistics() *ReservationQueueStatistics`

NewReservationQueueStatistics instantiates a new ReservationQueueStatistics object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationQueueStatisticsWithDefaults

`func NewReservationQueueStatisticsWithDefaults() *ReservationQueueStatistics`

NewReservationQueueStatisticsWithDefaults instantiates a new ReservationQueueStatistics object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ReservationQueueStatistics) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReservationQueueStatistics) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReservationQueueStatistics) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReservationQueueStatistics) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetStatistics

`func (o *ReservationQueueStatistics) GetStatistics() ReservationQueueStatisticsType`

GetStatistics returns the Statistics field if non-nil, zero value otherwise.

### GetStatisticsOk

`func (o *ReservationQueueStatistics) GetStatisticsOk() (*ReservationQueueStatisticsType, bool)`

GetStatisticsOk returns a tuple with the Statistics field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatistics

`func (o *ReservationQueueStatistics) SetStatistics(v ReservationQueueStatisticsType)`

SetStatistics sets Statistics field to given value.

### HasStatistics

`func (o *ReservationQueueStatistics) HasStatistics() bool`

HasStatistics returns a boolean if a field has been set.

### GetWarnings

`func (o *ReservationQueueStatistics) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReservationQueueStatistics) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReservationQueueStatistics) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReservationQueueStatistics) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


