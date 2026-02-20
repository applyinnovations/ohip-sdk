# ReservationDetailsMassUpdateCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationIds** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique ID of reservations to be updated. | [optional] 
**ExpectedTimes** | Pointer to [**ResExpectedTimesType**](ResExpectedTimesType.md) |  | [optional] 
**MarketCode** | Pointer to **string** | Market code of the reservation. | [optional] 
**SourceCode** | Pointer to **string** | Source code of the reservation. | [optional] 
**BookingMedium** | Pointer to **string** | Classifies the medium(Channel field on reservation screen) through which the reservation is made. | [optional] 
**AdvanceCheckIn** | Pointer to [**AdvanceCheckInType**](AdvanceCheckInType.md) |  | [optional] 
**UserDefinedFields** | Pointer to [**UserDefinedFieldsType**](UserDefinedFieldsType.md) |  | [optional] 

## Methods

### NewReservationDetailsMassUpdateCriteria

`func NewReservationDetailsMassUpdateCriteria() *ReservationDetailsMassUpdateCriteria`

NewReservationDetailsMassUpdateCriteria instantiates a new ReservationDetailsMassUpdateCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationDetailsMassUpdateCriteriaWithDefaults

`func NewReservationDetailsMassUpdateCriteriaWithDefaults() *ReservationDetailsMassUpdateCriteria`

NewReservationDetailsMassUpdateCriteriaWithDefaults instantiates a new ReservationDetailsMassUpdateCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationIds

`func (o *ReservationDetailsMassUpdateCriteria) GetReservationIds() []UniqueIDType`

GetReservationIds returns the ReservationIds field if non-nil, zero value otherwise.

### GetReservationIdsOk

`func (o *ReservationDetailsMassUpdateCriteria) GetReservationIdsOk() (*[]UniqueIDType, bool)`

GetReservationIdsOk returns a tuple with the ReservationIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIds

`func (o *ReservationDetailsMassUpdateCriteria) SetReservationIds(v []UniqueIDType)`

SetReservationIds sets ReservationIds field to given value.

### HasReservationIds

`func (o *ReservationDetailsMassUpdateCriteria) HasReservationIds() bool`

HasReservationIds returns a boolean if a field has been set.

### GetExpectedTimes

`func (o *ReservationDetailsMassUpdateCriteria) GetExpectedTimes() ResExpectedTimesType`

GetExpectedTimes returns the ExpectedTimes field if non-nil, zero value otherwise.

### GetExpectedTimesOk

`func (o *ReservationDetailsMassUpdateCriteria) GetExpectedTimesOk() (*ResExpectedTimesType, bool)`

GetExpectedTimesOk returns a tuple with the ExpectedTimes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpectedTimes

`func (o *ReservationDetailsMassUpdateCriteria) SetExpectedTimes(v ResExpectedTimesType)`

SetExpectedTimes sets ExpectedTimes field to given value.

### HasExpectedTimes

`func (o *ReservationDetailsMassUpdateCriteria) HasExpectedTimes() bool`

HasExpectedTimes returns a boolean if a field has been set.

### GetMarketCode

`func (o *ReservationDetailsMassUpdateCriteria) GetMarketCode() string`

GetMarketCode returns the MarketCode field if non-nil, zero value otherwise.

### GetMarketCodeOk

`func (o *ReservationDetailsMassUpdateCriteria) GetMarketCodeOk() (*string, bool)`

GetMarketCodeOk returns a tuple with the MarketCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketCode

`func (o *ReservationDetailsMassUpdateCriteria) SetMarketCode(v string)`

SetMarketCode sets MarketCode field to given value.

### HasMarketCode

`func (o *ReservationDetailsMassUpdateCriteria) HasMarketCode() bool`

HasMarketCode returns a boolean if a field has been set.

### GetSourceCode

`func (o *ReservationDetailsMassUpdateCriteria) GetSourceCode() string`

GetSourceCode returns the SourceCode field if non-nil, zero value otherwise.

### GetSourceCodeOk

`func (o *ReservationDetailsMassUpdateCriteria) GetSourceCodeOk() (*string, bool)`

GetSourceCodeOk returns a tuple with the SourceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceCode

`func (o *ReservationDetailsMassUpdateCriteria) SetSourceCode(v string)`

SetSourceCode sets SourceCode field to given value.

### HasSourceCode

`func (o *ReservationDetailsMassUpdateCriteria) HasSourceCode() bool`

HasSourceCode returns a boolean if a field has been set.

### GetBookingMedium

`func (o *ReservationDetailsMassUpdateCriteria) GetBookingMedium() string`

GetBookingMedium returns the BookingMedium field if non-nil, zero value otherwise.

### GetBookingMediumOk

`func (o *ReservationDetailsMassUpdateCriteria) GetBookingMediumOk() (*string, bool)`

GetBookingMediumOk returns a tuple with the BookingMedium field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingMedium

`func (o *ReservationDetailsMassUpdateCriteria) SetBookingMedium(v string)`

SetBookingMedium sets BookingMedium field to given value.

### HasBookingMedium

`func (o *ReservationDetailsMassUpdateCriteria) HasBookingMedium() bool`

HasBookingMedium returns a boolean if a field has been set.

### GetAdvanceCheckIn

`func (o *ReservationDetailsMassUpdateCriteria) GetAdvanceCheckIn() AdvanceCheckInType`

GetAdvanceCheckIn returns the AdvanceCheckIn field if non-nil, zero value otherwise.

### GetAdvanceCheckInOk

`func (o *ReservationDetailsMassUpdateCriteria) GetAdvanceCheckInOk() (*AdvanceCheckInType, bool)`

GetAdvanceCheckInOk returns a tuple with the AdvanceCheckIn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdvanceCheckIn

`func (o *ReservationDetailsMassUpdateCriteria) SetAdvanceCheckIn(v AdvanceCheckInType)`

SetAdvanceCheckIn sets AdvanceCheckIn field to given value.

### HasAdvanceCheckIn

`func (o *ReservationDetailsMassUpdateCriteria) HasAdvanceCheckIn() bool`

HasAdvanceCheckIn returns a boolean if a field has been set.

### GetUserDefinedFields

`func (o *ReservationDetailsMassUpdateCriteria) GetUserDefinedFields() UserDefinedFieldsType`

GetUserDefinedFields returns the UserDefinedFields field if non-nil, zero value otherwise.

### GetUserDefinedFieldsOk

`func (o *ReservationDetailsMassUpdateCriteria) GetUserDefinedFieldsOk() (*UserDefinedFieldsType, bool)`

GetUserDefinedFieldsOk returns a tuple with the UserDefinedFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserDefinedFields

`func (o *ReservationDetailsMassUpdateCriteria) SetUserDefinedFields(v UserDefinedFieldsType)`

SetUserDefinedFields sets UserDefinedFields field to given value.

### HasUserDefinedFields

`func (o *ReservationDetailsMassUpdateCriteria) HasUserDefinedFields() bool`

HasUserDefinedFields returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


