# ReservationsSummaryInformationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | Indicates number of records the API has returned actually as per the API request criteria. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether there are more records available to be returned as per the API request criteria or not. | [optional] 
**Limit** | Pointer to **int32** | Indicates number of records the API can return as per the API request limit sent. A maximum of 200 records can be only returned at a time. | [optional] 
**Offset** | Pointer to **int32** | Indicates the index of the next applicable set(page). | [optional] 
**ReservationsInformation** | Pointer to [**[]ReservationsInformationType**](ReservationsInformationType.md) |  | [optional] 
**TotalResults** | Pointer to **int32** | Indicates total number of records available that can be returned as per the API request criteria. | [optional] 

## Methods

### NewReservationsSummaryInformationType

`func NewReservationsSummaryInformationType() *ReservationsSummaryInformationType`

NewReservationsSummaryInformationType instantiates a new ReservationsSummaryInformationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationsSummaryInformationTypeWithDefaults

`func NewReservationsSummaryInformationTypeWithDefaults() *ReservationsSummaryInformationType`

NewReservationsSummaryInformationTypeWithDefaults instantiates a new ReservationsSummaryInformationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *ReservationsSummaryInformationType) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *ReservationsSummaryInformationType) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *ReservationsSummaryInformationType) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *ReservationsSummaryInformationType) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *ReservationsSummaryInformationType) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *ReservationsSummaryInformationType) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *ReservationsSummaryInformationType) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *ReservationsSummaryInformationType) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetLimit

`func (o *ReservationsSummaryInformationType) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *ReservationsSummaryInformationType) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *ReservationsSummaryInformationType) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *ReservationsSummaryInformationType) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetOffset

`func (o *ReservationsSummaryInformationType) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *ReservationsSummaryInformationType) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *ReservationsSummaryInformationType) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *ReservationsSummaryInformationType) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetReservationsInformation

`func (o *ReservationsSummaryInformationType) GetReservationsInformation() []ReservationsInformationType`

GetReservationsInformation returns the ReservationsInformation field if non-nil, zero value otherwise.

### GetReservationsInformationOk

`func (o *ReservationsSummaryInformationType) GetReservationsInformationOk() (*[]ReservationsInformationType, bool)`

GetReservationsInformationOk returns a tuple with the ReservationsInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationsInformation

`func (o *ReservationsSummaryInformationType) SetReservationsInformation(v []ReservationsInformationType)`

SetReservationsInformation sets ReservationsInformation field to given value.

### HasReservationsInformation

`func (o *ReservationsSummaryInformationType) HasReservationsInformation() bool`

HasReservationsInformation returns a boolean if a field has been set.

### GetTotalResults

`func (o *ReservationsSummaryInformationType) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *ReservationsSummaryInformationType) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *ReservationsSummaryInformationType) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *ReservationsSummaryInformationType) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


