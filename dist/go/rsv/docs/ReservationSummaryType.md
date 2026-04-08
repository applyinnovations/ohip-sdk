# ReservationSummaryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**Guarantee** | Pointer to [**ResGuaranteeType**](ResGuaranteeType.md) |  | [optional] 
**GuestFirstName** | Pointer to **string** | Given name, first name or names | [optional] 
**GuestLastName** | Pointer to **string** | Family name, last name. | [optional] 
**StayPeriod** | Pointer to [**DateRangeType**](DateRangeType.md) |  | [optional] 

## Methods

### NewReservationSummaryType

`func NewReservationSummaryType() *ReservationSummaryType`

NewReservationSummaryType instantiates a new ReservationSummaryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationSummaryTypeWithDefaults

`func NewReservationSummaryTypeWithDefaults() *ReservationSummaryType`

NewReservationSummaryTypeWithDefaults instantiates a new ReservationSummaryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationIdList

`func (o *ReservationSummaryType) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *ReservationSummaryType) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *ReservationSummaryType) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *ReservationSummaryType) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetGuarantee

`func (o *ReservationSummaryType) GetGuarantee() ResGuaranteeType`

GetGuarantee returns the Guarantee field if non-nil, zero value otherwise.

### GetGuaranteeOk

`func (o *ReservationSummaryType) GetGuaranteeOk() (*ResGuaranteeType, bool)`

GetGuaranteeOk returns a tuple with the Guarantee field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuarantee

`func (o *ReservationSummaryType) SetGuarantee(v ResGuaranteeType)`

SetGuarantee sets Guarantee field to given value.

### HasGuarantee

`func (o *ReservationSummaryType) HasGuarantee() bool`

HasGuarantee returns a boolean if a field has been set.

### GetGuestFirstName

`func (o *ReservationSummaryType) GetGuestFirstName() string`

GetGuestFirstName returns the GuestFirstName field if non-nil, zero value otherwise.

### GetGuestFirstNameOk

`func (o *ReservationSummaryType) GetGuestFirstNameOk() (*string, bool)`

GetGuestFirstNameOk returns a tuple with the GuestFirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestFirstName

`func (o *ReservationSummaryType) SetGuestFirstName(v string)`

SetGuestFirstName sets GuestFirstName field to given value.

### HasGuestFirstName

`func (o *ReservationSummaryType) HasGuestFirstName() bool`

HasGuestFirstName returns a boolean if a field has been set.

### GetGuestLastName

`func (o *ReservationSummaryType) GetGuestLastName() string`

GetGuestLastName returns the GuestLastName field if non-nil, zero value otherwise.

### GetGuestLastNameOk

`func (o *ReservationSummaryType) GetGuestLastNameOk() (*string, bool)`

GetGuestLastNameOk returns a tuple with the GuestLastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestLastName

`func (o *ReservationSummaryType) SetGuestLastName(v string)`

SetGuestLastName sets GuestLastName field to given value.

### HasGuestLastName

`func (o *ReservationSummaryType) HasGuestLastName() bool`

HasGuestLastName returns a boolean if a field has been set.

### GetStayPeriod

`func (o *ReservationSummaryType) GetStayPeriod() DateRangeType`

GetStayPeriod returns the StayPeriod field if non-nil, zero value otherwise.

### GetStayPeriodOk

`func (o *ReservationSummaryType) GetStayPeriodOk() (*DateRangeType, bool)`

GetStayPeriodOk returns a tuple with the StayPeriod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayPeriod

`func (o *ReservationSummaryType) SetStayPeriod(v DateRangeType)`

SetStayPeriod sets StayPeriod field to given value.

### HasStayPeriod

`func (o *ReservationSummaryType) HasStayPeriod() bool`

HasStayPeriod returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


