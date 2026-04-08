# AdvanceRoomChargesInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AvailablePostingDates** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**Reservation** | Pointer to [**ReservationInfoType**](ReservationInfoType.md) |  | [optional] 
**GeneratedForEntireStay** | Pointer to **bool** | Indicates if the advance folio has been generated for the entire stay. | [optional] 
**LastRoomAndTaxPostedDate** | Pointer to **string** | Indicates the date of the stay until which the advance bill has been generated . | [optional] 

## Methods

### NewAdvanceRoomChargesInfoType

`func NewAdvanceRoomChargesInfoType() *AdvanceRoomChargesInfoType`

NewAdvanceRoomChargesInfoType instantiates a new AdvanceRoomChargesInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAdvanceRoomChargesInfoTypeWithDefaults

`func NewAdvanceRoomChargesInfoTypeWithDefaults() *AdvanceRoomChargesInfoType`

NewAdvanceRoomChargesInfoTypeWithDefaults instantiates a new AdvanceRoomChargesInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAvailablePostingDates

`func (o *AdvanceRoomChargesInfoType) GetAvailablePostingDates() TimeSpanType`

GetAvailablePostingDates returns the AvailablePostingDates field if non-nil, zero value otherwise.

### GetAvailablePostingDatesOk

`func (o *AdvanceRoomChargesInfoType) GetAvailablePostingDatesOk() (*TimeSpanType, bool)`

GetAvailablePostingDatesOk returns a tuple with the AvailablePostingDates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvailablePostingDates

`func (o *AdvanceRoomChargesInfoType) SetAvailablePostingDates(v TimeSpanType)`

SetAvailablePostingDates sets AvailablePostingDates field to given value.

### HasAvailablePostingDates

`func (o *AdvanceRoomChargesInfoType) HasAvailablePostingDates() bool`

HasAvailablePostingDates returns a boolean if a field has been set.

### GetReservation

`func (o *AdvanceRoomChargesInfoType) GetReservation() ReservationInfoType`

GetReservation returns the Reservation field if non-nil, zero value otherwise.

### GetReservationOk

`func (o *AdvanceRoomChargesInfoType) GetReservationOk() (*ReservationInfoType, bool)`

GetReservationOk returns a tuple with the Reservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservation

`func (o *AdvanceRoomChargesInfoType) SetReservation(v ReservationInfoType)`

SetReservation sets Reservation field to given value.

### HasReservation

`func (o *AdvanceRoomChargesInfoType) HasReservation() bool`

HasReservation returns a boolean if a field has been set.

### GetGeneratedForEntireStay

`func (o *AdvanceRoomChargesInfoType) GetGeneratedForEntireStay() bool`

GetGeneratedForEntireStay returns the GeneratedForEntireStay field if non-nil, zero value otherwise.

### GetGeneratedForEntireStayOk

`func (o *AdvanceRoomChargesInfoType) GetGeneratedForEntireStayOk() (*bool, bool)`

GetGeneratedForEntireStayOk returns a tuple with the GeneratedForEntireStay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneratedForEntireStay

`func (o *AdvanceRoomChargesInfoType) SetGeneratedForEntireStay(v bool)`

SetGeneratedForEntireStay sets GeneratedForEntireStay field to given value.

### HasGeneratedForEntireStay

`func (o *AdvanceRoomChargesInfoType) HasGeneratedForEntireStay() bool`

HasGeneratedForEntireStay returns a boolean if a field has been set.

### GetLastRoomAndTaxPostedDate

`func (o *AdvanceRoomChargesInfoType) GetLastRoomAndTaxPostedDate() string`

GetLastRoomAndTaxPostedDate returns the LastRoomAndTaxPostedDate field if non-nil, zero value otherwise.

### GetLastRoomAndTaxPostedDateOk

`func (o *AdvanceRoomChargesInfoType) GetLastRoomAndTaxPostedDateOk() (*string, bool)`

GetLastRoomAndTaxPostedDateOk returns a tuple with the LastRoomAndTaxPostedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastRoomAndTaxPostedDate

`func (o *AdvanceRoomChargesInfoType) SetLastRoomAndTaxPostedDate(v string)`

SetLastRoomAndTaxPostedDate sets LastRoomAndTaxPostedDate field to given value.

### HasLastRoomAndTaxPostedDate

`func (o *AdvanceRoomChargesInfoType) HasLastRoomAndTaxPostedDate() bool`

HasLastRoomAndTaxPostedDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


