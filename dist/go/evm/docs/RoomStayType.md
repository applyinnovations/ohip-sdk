# RoomStayType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RegistrationNumber** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**CurrentRoomInfo** | Pointer to [**CurrentRoomInfoType**](CurrentRoomInfoType.md) |  | [optional] 
**RoomRates** | Pointer to [**[]RoomRateType**](RoomRateType.md) | A collection of Room Rates associated with a particular Room Stay. Each Room Rate combination can have multiple rates. Example King functionSpaceDetails, Rack rate plan, Monday through Thursday, weekday amount, Friday and Saturday, weekend amount. | [optional] 
**GuestCounts** | Pointer to [**GuestCountsType**](GuestCountsType.md) |  | [optional] 
**ArrivalDate** | Pointer to **string** |  | [optional] 
**DepartureDate** | Pointer to **string** |  | [optional] 
**ExpectedTimes** | Pointer to [**ResExpectedTimesType**](ResExpectedTimesType.md) |  | [optional] 
**OriginalTimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**Guarantee** | Pointer to [**ResGuaranteeType**](ResGuaranteeType.md) |  | [optional] 
**Promotion** | Pointer to [**PromotionType**](PromotionType.md) |  | [optional] 
**SuiteWith** | Pointer to **string** | Connecting Rooms. | [optional] 
**Total** | Pointer to [**TotalType**](TotalType.md) |  | [optional] 
**TotalPoints** | Pointer to [**PointsType**](PointsType.md) |  | [optional] 
**MultiValueAttrs** | Pointer to **[]string** | Informative indicators indicating different values of an attribute exists over the stay. | [optional] 
**UpsellInfo** | Pointer to [**UpsellInfoType**](UpsellInfoType.md) |  | [optional] 
**MobileNotifications** | Pointer to [**ResMobileNotificationsType**](ResMobileNotificationsType.md) |  | [optional] 
**RoomNumberLocked** | Pointer to **bool** | When true, indicates a functionSpaceDetails number cannot be changed. When false, indicates a functionSpaceDetails number may be changed. | [optional] 
**PrintRate** | Pointer to **bool** | This control whether rate info will be printed in confirmation letter. | [optional] 
**OwnerReservationType** | Pointer to [**OwnerResTypeType**](OwnerResTypeType.md) |  | [optional] 
**PrimaryShareType** | Pointer to [**PrimaryShareTypeType**](PrimaryShareTypeType.md) |  | [optional] 
**RemoteCheckInAllowed** | Pointer to **bool** | Indicates whether the reservation is pre-registered for internet check-in or not. | [optional] 
**BookingMedium** | Pointer to **string** | Classifies the medium(Channel field on reservation screen) through which the reservation is made. | [optional] 
**BookingMediumDescription** | Pointer to **string** | Description of the booking medium. | [optional] 
**AvailableUpsellOfferCount** | Pointer to **int32** | Number of Upsell Offers Available for this stay. This will only be populated if the Upsell Instruction is included in the Allowed Instruction request | [optional] 

## Methods

### NewRoomStayType

`func NewRoomStayType() *RoomStayType`

NewRoomStayType instantiates a new RoomStayType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomStayTypeWithDefaults

`func NewRoomStayTypeWithDefaults() *RoomStayType`

NewRoomStayTypeWithDefaults instantiates a new RoomStayType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRegistrationNumber

`func (o *RoomStayType) GetRegistrationNumber() UniqueIDType`

GetRegistrationNumber returns the RegistrationNumber field if non-nil, zero value otherwise.

### GetRegistrationNumberOk

`func (o *RoomStayType) GetRegistrationNumberOk() (*UniqueIDType, bool)`

GetRegistrationNumberOk returns a tuple with the RegistrationNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegistrationNumber

`func (o *RoomStayType) SetRegistrationNumber(v UniqueIDType)`

SetRegistrationNumber sets RegistrationNumber field to given value.

### HasRegistrationNumber

`func (o *RoomStayType) HasRegistrationNumber() bool`

HasRegistrationNumber returns a boolean if a field has been set.

### GetCurrentRoomInfo

`func (o *RoomStayType) GetCurrentRoomInfo() CurrentRoomInfoType`

GetCurrentRoomInfo returns the CurrentRoomInfo field if non-nil, zero value otherwise.

### GetCurrentRoomInfoOk

`func (o *RoomStayType) GetCurrentRoomInfoOk() (*CurrentRoomInfoType, bool)`

GetCurrentRoomInfoOk returns a tuple with the CurrentRoomInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentRoomInfo

`func (o *RoomStayType) SetCurrentRoomInfo(v CurrentRoomInfoType)`

SetCurrentRoomInfo sets CurrentRoomInfo field to given value.

### HasCurrentRoomInfo

`func (o *RoomStayType) HasCurrentRoomInfo() bool`

HasCurrentRoomInfo returns a boolean if a field has been set.

### GetRoomRates

`func (o *RoomStayType) GetRoomRates() []RoomRateType`

GetRoomRates returns the RoomRates field if non-nil, zero value otherwise.

### GetRoomRatesOk

`func (o *RoomStayType) GetRoomRatesOk() (*[]RoomRateType, bool)`

GetRoomRatesOk returns a tuple with the RoomRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomRates

`func (o *RoomStayType) SetRoomRates(v []RoomRateType)`

SetRoomRates sets RoomRates field to given value.

### HasRoomRates

`func (o *RoomStayType) HasRoomRates() bool`

HasRoomRates returns a boolean if a field has been set.

### GetGuestCounts

`func (o *RoomStayType) GetGuestCounts() GuestCountsType`

GetGuestCounts returns the GuestCounts field if non-nil, zero value otherwise.

### GetGuestCountsOk

`func (o *RoomStayType) GetGuestCountsOk() (*GuestCountsType, bool)`

GetGuestCountsOk returns a tuple with the GuestCounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestCounts

`func (o *RoomStayType) SetGuestCounts(v GuestCountsType)`

SetGuestCounts sets GuestCounts field to given value.

### HasGuestCounts

`func (o *RoomStayType) HasGuestCounts() bool`

HasGuestCounts returns a boolean if a field has been set.

### GetArrivalDate

`func (o *RoomStayType) GetArrivalDate() string`

GetArrivalDate returns the ArrivalDate field if non-nil, zero value otherwise.

### GetArrivalDateOk

`func (o *RoomStayType) GetArrivalDateOk() (*string, bool)`

GetArrivalDateOk returns a tuple with the ArrivalDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrivalDate

`func (o *RoomStayType) SetArrivalDate(v string)`

SetArrivalDate sets ArrivalDate field to given value.

### HasArrivalDate

`func (o *RoomStayType) HasArrivalDate() bool`

HasArrivalDate returns a boolean if a field has been set.

### GetDepartureDate

`func (o *RoomStayType) GetDepartureDate() string`

GetDepartureDate returns the DepartureDate field if non-nil, zero value otherwise.

### GetDepartureDateOk

`func (o *RoomStayType) GetDepartureDateOk() (*string, bool)`

GetDepartureDateOk returns a tuple with the DepartureDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartureDate

`func (o *RoomStayType) SetDepartureDate(v string)`

SetDepartureDate sets DepartureDate field to given value.

### HasDepartureDate

`func (o *RoomStayType) HasDepartureDate() bool`

HasDepartureDate returns a boolean if a field has been set.

### GetExpectedTimes

`func (o *RoomStayType) GetExpectedTimes() ResExpectedTimesType`

GetExpectedTimes returns the ExpectedTimes field if non-nil, zero value otherwise.

### GetExpectedTimesOk

`func (o *RoomStayType) GetExpectedTimesOk() (*ResExpectedTimesType, bool)`

GetExpectedTimesOk returns a tuple with the ExpectedTimes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpectedTimes

`func (o *RoomStayType) SetExpectedTimes(v ResExpectedTimesType)`

SetExpectedTimes sets ExpectedTimes field to given value.

### HasExpectedTimes

`func (o *RoomStayType) HasExpectedTimes() bool`

HasExpectedTimes returns a boolean if a field has been set.

### GetOriginalTimeSpan

`func (o *RoomStayType) GetOriginalTimeSpan() TimeSpanType`

GetOriginalTimeSpan returns the OriginalTimeSpan field if non-nil, zero value otherwise.

### GetOriginalTimeSpanOk

`func (o *RoomStayType) GetOriginalTimeSpanOk() (*TimeSpanType, bool)`

GetOriginalTimeSpanOk returns a tuple with the OriginalTimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginalTimeSpan

`func (o *RoomStayType) SetOriginalTimeSpan(v TimeSpanType)`

SetOriginalTimeSpan sets OriginalTimeSpan field to given value.

### HasOriginalTimeSpan

`func (o *RoomStayType) HasOriginalTimeSpan() bool`

HasOriginalTimeSpan returns a boolean if a field has been set.

### GetGuarantee

`func (o *RoomStayType) GetGuarantee() ResGuaranteeType`

GetGuarantee returns the Guarantee field if non-nil, zero value otherwise.

### GetGuaranteeOk

`func (o *RoomStayType) GetGuaranteeOk() (*ResGuaranteeType, bool)`

GetGuaranteeOk returns a tuple with the Guarantee field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuarantee

`func (o *RoomStayType) SetGuarantee(v ResGuaranteeType)`

SetGuarantee sets Guarantee field to given value.

### HasGuarantee

`func (o *RoomStayType) HasGuarantee() bool`

HasGuarantee returns a boolean if a field has been set.

### GetPromotion

`func (o *RoomStayType) GetPromotion() PromotionType`

GetPromotion returns the Promotion field if non-nil, zero value otherwise.

### GetPromotionOk

`func (o *RoomStayType) GetPromotionOk() (*PromotionType, bool)`

GetPromotionOk returns a tuple with the Promotion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromotion

`func (o *RoomStayType) SetPromotion(v PromotionType)`

SetPromotion sets Promotion field to given value.

### HasPromotion

`func (o *RoomStayType) HasPromotion() bool`

HasPromotion returns a boolean if a field has been set.

### GetSuiteWith

`func (o *RoomStayType) GetSuiteWith() string`

GetSuiteWith returns the SuiteWith field if non-nil, zero value otherwise.

### GetSuiteWithOk

`func (o *RoomStayType) GetSuiteWithOk() (*string, bool)`

GetSuiteWithOk returns a tuple with the SuiteWith field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuiteWith

`func (o *RoomStayType) SetSuiteWith(v string)`

SetSuiteWith sets SuiteWith field to given value.

### HasSuiteWith

`func (o *RoomStayType) HasSuiteWith() bool`

HasSuiteWith returns a boolean if a field has been set.

### GetTotal

`func (o *RoomStayType) GetTotal() TotalType`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *RoomStayType) GetTotalOk() (*TotalType, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *RoomStayType) SetTotal(v TotalType)`

SetTotal sets Total field to given value.

### HasTotal

`func (o *RoomStayType) HasTotal() bool`

HasTotal returns a boolean if a field has been set.

### GetTotalPoints

`func (o *RoomStayType) GetTotalPoints() PointsType`

GetTotalPoints returns the TotalPoints field if non-nil, zero value otherwise.

### GetTotalPointsOk

`func (o *RoomStayType) GetTotalPointsOk() (*PointsType, bool)`

GetTotalPointsOk returns a tuple with the TotalPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPoints

`func (o *RoomStayType) SetTotalPoints(v PointsType)`

SetTotalPoints sets TotalPoints field to given value.

### HasTotalPoints

`func (o *RoomStayType) HasTotalPoints() bool`

HasTotalPoints returns a boolean if a field has been set.

### GetMultiValueAttrs

`func (o *RoomStayType) GetMultiValueAttrs() []string`

GetMultiValueAttrs returns the MultiValueAttrs field if non-nil, zero value otherwise.

### GetMultiValueAttrsOk

`func (o *RoomStayType) GetMultiValueAttrsOk() (*[]string, bool)`

GetMultiValueAttrsOk returns a tuple with the MultiValueAttrs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMultiValueAttrs

`func (o *RoomStayType) SetMultiValueAttrs(v []string)`

SetMultiValueAttrs sets MultiValueAttrs field to given value.

### HasMultiValueAttrs

`func (o *RoomStayType) HasMultiValueAttrs() bool`

HasMultiValueAttrs returns a boolean if a field has been set.

### GetUpsellInfo

`func (o *RoomStayType) GetUpsellInfo() UpsellInfoType`

GetUpsellInfo returns the UpsellInfo field if non-nil, zero value otherwise.

### GetUpsellInfoOk

`func (o *RoomStayType) GetUpsellInfoOk() (*UpsellInfoType, bool)`

GetUpsellInfoOk returns a tuple with the UpsellInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpsellInfo

`func (o *RoomStayType) SetUpsellInfo(v UpsellInfoType)`

SetUpsellInfo sets UpsellInfo field to given value.

### HasUpsellInfo

`func (o *RoomStayType) HasUpsellInfo() bool`

HasUpsellInfo returns a boolean if a field has been set.

### GetMobileNotifications

`func (o *RoomStayType) GetMobileNotifications() ResMobileNotificationsType`

GetMobileNotifications returns the MobileNotifications field if non-nil, zero value otherwise.

### GetMobileNotificationsOk

`func (o *RoomStayType) GetMobileNotificationsOk() (*ResMobileNotificationsType, bool)`

GetMobileNotificationsOk returns a tuple with the MobileNotifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMobileNotifications

`func (o *RoomStayType) SetMobileNotifications(v ResMobileNotificationsType)`

SetMobileNotifications sets MobileNotifications field to given value.

### HasMobileNotifications

`func (o *RoomStayType) HasMobileNotifications() bool`

HasMobileNotifications returns a boolean if a field has been set.

### GetRoomNumberLocked

`func (o *RoomStayType) GetRoomNumberLocked() bool`

GetRoomNumberLocked returns the RoomNumberLocked field if non-nil, zero value otherwise.

### GetRoomNumberLockedOk

`func (o *RoomStayType) GetRoomNumberLockedOk() (*bool, bool)`

GetRoomNumberLockedOk returns a tuple with the RoomNumberLocked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomNumberLocked

`func (o *RoomStayType) SetRoomNumberLocked(v bool)`

SetRoomNumberLocked sets RoomNumberLocked field to given value.

### HasRoomNumberLocked

`func (o *RoomStayType) HasRoomNumberLocked() bool`

HasRoomNumberLocked returns a boolean if a field has been set.

### GetPrintRate

`func (o *RoomStayType) GetPrintRate() bool`

GetPrintRate returns the PrintRate field if non-nil, zero value otherwise.

### GetPrintRateOk

`func (o *RoomStayType) GetPrintRateOk() (*bool, bool)`

GetPrintRateOk returns a tuple with the PrintRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrintRate

`func (o *RoomStayType) SetPrintRate(v bool)`

SetPrintRate sets PrintRate field to given value.

### HasPrintRate

`func (o *RoomStayType) HasPrintRate() bool`

HasPrintRate returns a boolean if a field has been set.

### GetOwnerReservationType

`func (o *RoomStayType) GetOwnerReservationType() OwnerResTypeType`

GetOwnerReservationType returns the OwnerReservationType field if non-nil, zero value otherwise.

### GetOwnerReservationTypeOk

`func (o *RoomStayType) GetOwnerReservationTypeOk() (*OwnerResTypeType, bool)`

GetOwnerReservationTypeOk returns a tuple with the OwnerReservationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerReservationType

`func (o *RoomStayType) SetOwnerReservationType(v OwnerResTypeType)`

SetOwnerReservationType sets OwnerReservationType field to given value.

### HasOwnerReservationType

`func (o *RoomStayType) HasOwnerReservationType() bool`

HasOwnerReservationType returns a boolean if a field has been set.

### GetPrimaryShareType

`func (o *RoomStayType) GetPrimaryShareType() PrimaryShareTypeType`

GetPrimaryShareType returns the PrimaryShareType field if non-nil, zero value otherwise.

### GetPrimaryShareTypeOk

`func (o *RoomStayType) GetPrimaryShareTypeOk() (*PrimaryShareTypeType, bool)`

GetPrimaryShareTypeOk returns a tuple with the PrimaryShareType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryShareType

`func (o *RoomStayType) SetPrimaryShareType(v PrimaryShareTypeType)`

SetPrimaryShareType sets PrimaryShareType field to given value.

### HasPrimaryShareType

`func (o *RoomStayType) HasPrimaryShareType() bool`

HasPrimaryShareType returns a boolean if a field has been set.

### GetRemoteCheckInAllowed

`func (o *RoomStayType) GetRemoteCheckInAllowed() bool`

GetRemoteCheckInAllowed returns the RemoteCheckInAllowed field if non-nil, zero value otherwise.

### GetRemoteCheckInAllowedOk

`func (o *RoomStayType) GetRemoteCheckInAllowedOk() (*bool, bool)`

GetRemoteCheckInAllowedOk returns a tuple with the RemoteCheckInAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoteCheckInAllowed

`func (o *RoomStayType) SetRemoteCheckInAllowed(v bool)`

SetRemoteCheckInAllowed sets RemoteCheckInAllowed field to given value.

### HasRemoteCheckInAllowed

`func (o *RoomStayType) HasRemoteCheckInAllowed() bool`

HasRemoteCheckInAllowed returns a boolean if a field has been set.

### GetBookingMedium

`func (o *RoomStayType) GetBookingMedium() string`

GetBookingMedium returns the BookingMedium field if non-nil, zero value otherwise.

### GetBookingMediumOk

`func (o *RoomStayType) GetBookingMediumOk() (*string, bool)`

GetBookingMediumOk returns a tuple with the BookingMedium field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingMedium

`func (o *RoomStayType) SetBookingMedium(v string)`

SetBookingMedium sets BookingMedium field to given value.

### HasBookingMedium

`func (o *RoomStayType) HasBookingMedium() bool`

HasBookingMedium returns a boolean if a field has been set.

### GetBookingMediumDescription

`func (o *RoomStayType) GetBookingMediumDescription() string`

GetBookingMediumDescription returns the BookingMediumDescription field if non-nil, zero value otherwise.

### GetBookingMediumDescriptionOk

`func (o *RoomStayType) GetBookingMediumDescriptionOk() (*string, bool)`

GetBookingMediumDescriptionOk returns a tuple with the BookingMediumDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingMediumDescription

`func (o *RoomStayType) SetBookingMediumDescription(v string)`

SetBookingMediumDescription sets BookingMediumDescription field to given value.

### HasBookingMediumDescription

`func (o *RoomStayType) HasBookingMediumDescription() bool`

HasBookingMediumDescription returns a boolean if a field has been set.

### GetAvailableUpsellOfferCount

`func (o *RoomStayType) GetAvailableUpsellOfferCount() int32`

GetAvailableUpsellOfferCount returns the AvailableUpsellOfferCount field if non-nil, zero value otherwise.

### GetAvailableUpsellOfferCountOk

`func (o *RoomStayType) GetAvailableUpsellOfferCountOk() (*int32, bool)`

GetAvailableUpsellOfferCountOk returns a tuple with the AvailableUpsellOfferCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvailableUpsellOfferCount

`func (o *RoomStayType) SetAvailableUpsellOfferCount(v int32)`

SetAvailableUpsellOfferCount sets AvailableUpsellOfferCount field to given value.

### HasAvailableUpsellOfferCount

`func (o *RoomStayType) HasAvailableUpsellOfferCount() bool`

HasAvailableUpsellOfferCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


