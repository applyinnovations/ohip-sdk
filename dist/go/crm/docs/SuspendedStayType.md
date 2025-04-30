# SuspendedStayType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel code of the reservation. | [optional] 
**ExternalConfirmationNo** | Pointer to **string** | External Confirmation number of the reservation on PMS side. | [optional] 
**ReservationStatus** | Pointer to **string** | Reservation status. | [optional] 
**CreateBusinessDate** | Pointer to **string** | Business Date when the reservation was created. | [optional] 
**ImportDate** | Pointer to **string** | Date when the Suspended Stay record was created or imported. | [optional] 
**ConfirmationNo** | Pointer to **string** | Confirmation number of the reservation on central side. | [optional] 
**RoomType** | Pointer to **string** | Room type of the reservation. | [optional] 
**RoomTypeCharged** | Pointer to **string** | Room Type used for the Rate calculation. | [optional] 
**SourceCode** | Pointer to **string** | Source of the reservation. | [optional] 
**BookingMedium** | Pointer to **string** | Classifies the medium(Channel field on reservation screen) through which the reservation is made. | [optional] 
**CurrencyCode** | Pointer to **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | [optional] 
**ArrivalDate** | Pointer to **string** | Date of arrival. | [optional] 
**DepartureDate** | Pointer to **string** | Date of departure. | [optional] 
**Adults** | Pointer to **float32** | Number of adults on the reservation. | [optional] 
**Children** | Pointer to **float32** | Number of children on the reservation. | [optional] 
**CancellationDate** | Pointer to **string** | Date of cancellation. | [optional] 
**RateCode** | Pointer to **string** | Rate Code of the reservation. | [optional] 
**RateCurrencyCode** | Pointer to **string** | Currency code of the rate. | [optional] 
**RateAmount** | Pointer to **float32** | Rate amount. | [optional] 
**Complimentary** | Pointer to **bool** | Indicates if the reservation is complimentary. | [optional] 
**PaymentMethod** | Pointer to **string** | Payment Method. | [optional] 
**StayStatus** | Pointer to **string** | Status of the stay. | [optional] 
**FullGuestName** | Pointer to **string** | Full display Name of guest profile. | [optional] 
**FullCompanyName** | Pointer to **string** | Full display Name of company profile. | [optional] 
**FullTAName** | Pointer to **string** | Full display Name of Travel Agent profile. | [optional] 
**FullSourceName** | Pointer to **string** | Full display Name of Source profile. | [optional] 
**FullGroupName** | Pointer to **string** | Full display Name of Group profile. | [optional] 
**PosCode** | Pointer to **string** | Point of Sales Code. | [optional] 
**InterfaceId** | Pointer to **string** | Identifier of the Interface. | [optional] 
**UserDefinedFields** | Pointer to [**UserDefinedFieldsType**](UserDefinedFieldsType.md) |  | [optional] 
**SuspendedStayRevenues** | Pointer to [**[]SuspendedStayRevenueType**](SuspendedStayRevenueType.md) |  | [optional] 
**SuspendedStayErrors** | Pointer to [**[]SuspendedStayErrorType**](SuspendedStayErrorType.md) |  | [optional] 
**SuspendedStayDailyRates** | Pointer to [**[]SuspendedStayDailyRateType**](SuspendedStayDailyRateType.md) |  | [optional] 
**SuspendedStayMemberships** | Pointer to [**[]SuspendedStayMembershipType**](SuspendedStayMembershipType.md) |  | [optional] 

## Methods

### NewSuspendedStayType

`func NewSuspendedStayType() *SuspendedStayType`

NewSuspendedStayType instantiates a new SuspendedStayType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSuspendedStayTypeWithDefaults

`func NewSuspendedStayTypeWithDefaults() *SuspendedStayType`

NewSuspendedStayTypeWithDefaults instantiates a new SuspendedStayType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *SuspendedStayType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *SuspendedStayType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *SuspendedStayType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *SuspendedStayType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetExternalConfirmationNo

`func (o *SuspendedStayType) GetExternalConfirmationNo() string`

GetExternalConfirmationNo returns the ExternalConfirmationNo field if non-nil, zero value otherwise.

### GetExternalConfirmationNoOk

`func (o *SuspendedStayType) GetExternalConfirmationNoOk() (*string, bool)`

GetExternalConfirmationNoOk returns a tuple with the ExternalConfirmationNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalConfirmationNo

`func (o *SuspendedStayType) SetExternalConfirmationNo(v string)`

SetExternalConfirmationNo sets ExternalConfirmationNo field to given value.

### HasExternalConfirmationNo

`func (o *SuspendedStayType) HasExternalConfirmationNo() bool`

HasExternalConfirmationNo returns a boolean if a field has been set.

### GetReservationStatus

`func (o *SuspendedStayType) GetReservationStatus() string`

GetReservationStatus returns the ReservationStatus field if non-nil, zero value otherwise.

### GetReservationStatusOk

`func (o *SuspendedStayType) GetReservationStatusOk() (*string, bool)`

GetReservationStatusOk returns a tuple with the ReservationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationStatus

`func (o *SuspendedStayType) SetReservationStatus(v string)`

SetReservationStatus sets ReservationStatus field to given value.

### HasReservationStatus

`func (o *SuspendedStayType) HasReservationStatus() bool`

HasReservationStatus returns a boolean if a field has been set.

### GetCreateBusinessDate

`func (o *SuspendedStayType) GetCreateBusinessDate() string`

GetCreateBusinessDate returns the CreateBusinessDate field if non-nil, zero value otherwise.

### GetCreateBusinessDateOk

`func (o *SuspendedStayType) GetCreateBusinessDateOk() (*string, bool)`

GetCreateBusinessDateOk returns a tuple with the CreateBusinessDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateBusinessDate

`func (o *SuspendedStayType) SetCreateBusinessDate(v string)`

SetCreateBusinessDate sets CreateBusinessDate field to given value.

### HasCreateBusinessDate

`func (o *SuspendedStayType) HasCreateBusinessDate() bool`

HasCreateBusinessDate returns a boolean if a field has been set.

### GetImportDate

`func (o *SuspendedStayType) GetImportDate() string`

GetImportDate returns the ImportDate field if non-nil, zero value otherwise.

### GetImportDateOk

`func (o *SuspendedStayType) GetImportDateOk() (*string, bool)`

GetImportDateOk returns a tuple with the ImportDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImportDate

`func (o *SuspendedStayType) SetImportDate(v string)`

SetImportDate sets ImportDate field to given value.

### HasImportDate

`func (o *SuspendedStayType) HasImportDate() bool`

HasImportDate returns a boolean if a field has been set.

### GetConfirmationNo

`func (o *SuspendedStayType) GetConfirmationNo() string`

GetConfirmationNo returns the ConfirmationNo field if non-nil, zero value otherwise.

### GetConfirmationNoOk

`func (o *SuspendedStayType) GetConfirmationNoOk() (*string, bool)`

GetConfirmationNoOk returns a tuple with the ConfirmationNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfirmationNo

`func (o *SuspendedStayType) SetConfirmationNo(v string)`

SetConfirmationNo sets ConfirmationNo field to given value.

### HasConfirmationNo

`func (o *SuspendedStayType) HasConfirmationNo() bool`

HasConfirmationNo returns a boolean if a field has been set.

### GetRoomType

`func (o *SuspendedStayType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *SuspendedStayType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *SuspendedStayType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *SuspendedStayType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetRoomTypeCharged

`func (o *SuspendedStayType) GetRoomTypeCharged() string`

GetRoomTypeCharged returns the RoomTypeCharged field if non-nil, zero value otherwise.

### GetRoomTypeChargedOk

`func (o *SuspendedStayType) GetRoomTypeChargedOk() (*string, bool)`

GetRoomTypeChargedOk returns a tuple with the RoomTypeCharged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypeCharged

`func (o *SuspendedStayType) SetRoomTypeCharged(v string)`

SetRoomTypeCharged sets RoomTypeCharged field to given value.

### HasRoomTypeCharged

`func (o *SuspendedStayType) HasRoomTypeCharged() bool`

HasRoomTypeCharged returns a boolean if a field has been set.

### GetSourceCode

`func (o *SuspendedStayType) GetSourceCode() string`

GetSourceCode returns the SourceCode field if non-nil, zero value otherwise.

### GetSourceCodeOk

`func (o *SuspendedStayType) GetSourceCodeOk() (*string, bool)`

GetSourceCodeOk returns a tuple with the SourceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceCode

`func (o *SuspendedStayType) SetSourceCode(v string)`

SetSourceCode sets SourceCode field to given value.

### HasSourceCode

`func (o *SuspendedStayType) HasSourceCode() bool`

HasSourceCode returns a boolean if a field has been set.

### GetBookingMedium

`func (o *SuspendedStayType) GetBookingMedium() string`

GetBookingMedium returns the BookingMedium field if non-nil, zero value otherwise.

### GetBookingMediumOk

`func (o *SuspendedStayType) GetBookingMediumOk() (*string, bool)`

GetBookingMediumOk returns a tuple with the BookingMedium field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingMedium

`func (o *SuspendedStayType) SetBookingMedium(v string)`

SetBookingMedium sets BookingMedium field to given value.

### HasBookingMedium

`func (o *SuspendedStayType) HasBookingMedium() bool`

HasBookingMedium returns a boolean if a field has been set.

### GetCurrencyCode

`func (o *SuspendedStayType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *SuspendedStayType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *SuspendedStayType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *SuspendedStayType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetArrivalDate

`func (o *SuspendedStayType) GetArrivalDate() string`

GetArrivalDate returns the ArrivalDate field if non-nil, zero value otherwise.

### GetArrivalDateOk

`func (o *SuspendedStayType) GetArrivalDateOk() (*string, bool)`

GetArrivalDateOk returns a tuple with the ArrivalDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrivalDate

`func (o *SuspendedStayType) SetArrivalDate(v string)`

SetArrivalDate sets ArrivalDate field to given value.

### HasArrivalDate

`func (o *SuspendedStayType) HasArrivalDate() bool`

HasArrivalDate returns a boolean if a field has been set.

### GetDepartureDate

`func (o *SuspendedStayType) GetDepartureDate() string`

GetDepartureDate returns the DepartureDate field if non-nil, zero value otherwise.

### GetDepartureDateOk

`func (o *SuspendedStayType) GetDepartureDateOk() (*string, bool)`

GetDepartureDateOk returns a tuple with the DepartureDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartureDate

`func (o *SuspendedStayType) SetDepartureDate(v string)`

SetDepartureDate sets DepartureDate field to given value.

### HasDepartureDate

`func (o *SuspendedStayType) HasDepartureDate() bool`

HasDepartureDate returns a boolean if a field has been set.

### GetAdults

`func (o *SuspendedStayType) GetAdults() float32`

GetAdults returns the Adults field if non-nil, zero value otherwise.

### GetAdultsOk

`func (o *SuspendedStayType) GetAdultsOk() (*float32, bool)`

GetAdultsOk returns a tuple with the Adults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdults

`func (o *SuspendedStayType) SetAdults(v float32)`

SetAdults sets Adults field to given value.

### HasAdults

`func (o *SuspendedStayType) HasAdults() bool`

HasAdults returns a boolean if a field has been set.

### GetChildren

`func (o *SuspendedStayType) GetChildren() float32`

GetChildren returns the Children field if non-nil, zero value otherwise.

### GetChildrenOk

`func (o *SuspendedStayType) GetChildrenOk() (*float32, bool)`

GetChildrenOk returns a tuple with the Children field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildren

`func (o *SuspendedStayType) SetChildren(v float32)`

SetChildren sets Children field to given value.

### HasChildren

`func (o *SuspendedStayType) HasChildren() bool`

HasChildren returns a boolean if a field has been set.

### GetCancellationDate

`func (o *SuspendedStayType) GetCancellationDate() string`

GetCancellationDate returns the CancellationDate field if non-nil, zero value otherwise.

### GetCancellationDateOk

`func (o *SuspendedStayType) GetCancellationDateOk() (*string, bool)`

GetCancellationDateOk returns a tuple with the CancellationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationDate

`func (o *SuspendedStayType) SetCancellationDate(v string)`

SetCancellationDate sets CancellationDate field to given value.

### HasCancellationDate

`func (o *SuspendedStayType) HasCancellationDate() bool`

HasCancellationDate returns a boolean if a field has been set.

### GetRateCode

`func (o *SuspendedStayType) GetRateCode() string`

GetRateCode returns the RateCode field if non-nil, zero value otherwise.

### GetRateCodeOk

`func (o *SuspendedStayType) GetRateCodeOk() (*string, bool)`

GetRateCodeOk returns a tuple with the RateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCode

`func (o *SuspendedStayType) SetRateCode(v string)`

SetRateCode sets RateCode field to given value.

### HasRateCode

`func (o *SuspendedStayType) HasRateCode() bool`

HasRateCode returns a boolean if a field has been set.

### GetRateCurrencyCode

`func (o *SuspendedStayType) GetRateCurrencyCode() string`

GetRateCurrencyCode returns the RateCurrencyCode field if non-nil, zero value otherwise.

### GetRateCurrencyCodeOk

`func (o *SuspendedStayType) GetRateCurrencyCodeOk() (*string, bool)`

GetRateCurrencyCodeOk returns a tuple with the RateCurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCurrencyCode

`func (o *SuspendedStayType) SetRateCurrencyCode(v string)`

SetRateCurrencyCode sets RateCurrencyCode field to given value.

### HasRateCurrencyCode

`func (o *SuspendedStayType) HasRateCurrencyCode() bool`

HasRateCurrencyCode returns a boolean if a field has been set.

### GetRateAmount

`func (o *SuspendedStayType) GetRateAmount() float32`

GetRateAmount returns the RateAmount field if non-nil, zero value otherwise.

### GetRateAmountOk

`func (o *SuspendedStayType) GetRateAmountOk() (*float32, bool)`

GetRateAmountOk returns a tuple with the RateAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateAmount

`func (o *SuspendedStayType) SetRateAmount(v float32)`

SetRateAmount sets RateAmount field to given value.

### HasRateAmount

`func (o *SuspendedStayType) HasRateAmount() bool`

HasRateAmount returns a boolean if a field has been set.

### GetComplimentary

`func (o *SuspendedStayType) GetComplimentary() bool`

GetComplimentary returns the Complimentary field if non-nil, zero value otherwise.

### GetComplimentaryOk

`func (o *SuspendedStayType) GetComplimentaryOk() (*bool, bool)`

GetComplimentaryOk returns a tuple with the Complimentary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComplimentary

`func (o *SuspendedStayType) SetComplimentary(v bool)`

SetComplimentary sets Complimentary field to given value.

### HasComplimentary

`func (o *SuspendedStayType) HasComplimentary() bool`

HasComplimentary returns a boolean if a field has been set.

### GetPaymentMethod

`func (o *SuspendedStayType) GetPaymentMethod() string`

GetPaymentMethod returns the PaymentMethod field if non-nil, zero value otherwise.

### GetPaymentMethodOk

`func (o *SuspendedStayType) GetPaymentMethodOk() (*string, bool)`

GetPaymentMethodOk returns a tuple with the PaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethod

`func (o *SuspendedStayType) SetPaymentMethod(v string)`

SetPaymentMethod sets PaymentMethod field to given value.

### HasPaymentMethod

`func (o *SuspendedStayType) HasPaymentMethod() bool`

HasPaymentMethod returns a boolean if a field has been set.

### GetStayStatus

`func (o *SuspendedStayType) GetStayStatus() string`

GetStayStatus returns the StayStatus field if non-nil, zero value otherwise.

### GetStayStatusOk

`func (o *SuspendedStayType) GetStayStatusOk() (*string, bool)`

GetStayStatusOk returns a tuple with the StayStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayStatus

`func (o *SuspendedStayType) SetStayStatus(v string)`

SetStayStatus sets StayStatus field to given value.

### HasStayStatus

`func (o *SuspendedStayType) HasStayStatus() bool`

HasStayStatus returns a boolean if a field has been set.

### GetFullGuestName

`func (o *SuspendedStayType) GetFullGuestName() string`

GetFullGuestName returns the FullGuestName field if non-nil, zero value otherwise.

### GetFullGuestNameOk

`func (o *SuspendedStayType) GetFullGuestNameOk() (*string, bool)`

GetFullGuestNameOk returns a tuple with the FullGuestName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullGuestName

`func (o *SuspendedStayType) SetFullGuestName(v string)`

SetFullGuestName sets FullGuestName field to given value.

### HasFullGuestName

`func (o *SuspendedStayType) HasFullGuestName() bool`

HasFullGuestName returns a boolean if a field has been set.

### GetFullCompanyName

`func (o *SuspendedStayType) GetFullCompanyName() string`

GetFullCompanyName returns the FullCompanyName field if non-nil, zero value otherwise.

### GetFullCompanyNameOk

`func (o *SuspendedStayType) GetFullCompanyNameOk() (*string, bool)`

GetFullCompanyNameOk returns a tuple with the FullCompanyName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullCompanyName

`func (o *SuspendedStayType) SetFullCompanyName(v string)`

SetFullCompanyName sets FullCompanyName field to given value.

### HasFullCompanyName

`func (o *SuspendedStayType) HasFullCompanyName() bool`

HasFullCompanyName returns a boolean if a field has been set.

### GetFullTAName

`func (o *SuspendedStayType) GetFullTAName() string`

GetFullTAName returns the FullTAName field if non-nil, zero value otherwise.

### GetFullTANameOk

`func (o *SuspendedStayType) GetFullTANameOk() (*string, bool)`

GetFullTANameOk returns a tuple with the FullTAName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullTAName

`func (o *SuspendedStayType) SetFullTAName(v string)`

SetFullTAName sets FullTAName field to given value.

### HasFullTAName

`func (o *SuspendedStayType) HasFullTAName() bool`

HasFullTAName returns a boolean if a field has been set.

### GetFullSourceName

`func (o *SuspendedStayType) GetFullSourceName() string`

GetFullSourceName returns the FullSourceName field if non-nil, zero value otherwise.

### GetFullSourceNameOk

`func (o *SuspendedStayType) GetFullSourceNameOk() (*string, bool)`

GetFullSourceNameOk returns a tuple with the FullSourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullSourceName

`func (o *SuspendedStayType) SetFullSourceName(v string)`

SetFullSourceName sets FullSourceName field to given value.

### HasFullSourceName

`func (o *SuspendedStayType) HasFullSourceName() bool`

HasFullSourceName returns a boolean if a field has been set.

### GetFullGroupName

`func (o *SuspendedStayType) GetFullGroupName() string`

GetFullGroupName returns the FullGroupName field if non-nil, zero value otherwise.

### GetFullGroupNameOk

`func (o *SuspendedStayType) GetFullGroupNameOk() (*string, bool)`

GetFullGroupNameOk returns a tuple with the FullGroupName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullGroupName

`func (o *SuspendedStayType) SetFullGroupName(v string)`

SetFullGroupName sets FullGroupName field to given value.

### HasFullGroupName

`func (o *SuspendedStayType) HasFullGroupName() bool`

HasFullGroupName returns a boolean if a field has been set.

### GetPosCode

`func (o *SuspendedStayType) GetPosCode() string`

GetPosCode returns the PosCode field if non-nil, zero value otherwise.

### GetPosCodeOk

`func (o *SuspendedStayType) GetPosCodeOk() (*string, bool)`

GetPosCodeOk returns a tuple with the PosCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPosCode

`func (o *SuspendedStayType) SetPosCode(v string)`

SetPosCode sets PosCode field to given value.

### HasPosCode

`func (o *SuspendedStayType) HasPosCode() bool`

HasPosCode returns a boolean if a field has been set.

### GetInterfaceId

`func (o *SuspendedStayType) GetInterfaceId() string`

GetInterfaceId returns the InterfaceId field if non-nil, zero value otherwise.

### GetInterfaceIdOk

`func (o *SuspendedStayType) GetInterfaceIdOk() (*string, bool)`

GetInterfaceIdOk returns a tuple with the InterfaceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceId

`func (o *SuspendedStayType) SetInterfaceId(v string)`

SetInterfaceId sets InterfaceId field to given value.

### HasInterfaceId

`func (o *SuspendedStayType) HasInterfaceId() bool`

HasInterfaceId returns a boolean if a field has been set.

### GetUserDefinedFields

`func (o *SuspendedStayType) GetUserDefinedFields() UserDefinedFieldsType`

GetUserDefinedFields returns the UserDefinedFields field if non-nil, zero value otherwise.

### GetUserDefinedFieldsOk

`func (o *SuspendedStayType) GetUserDefinedFieldsOk() (*UserDefinedFieldsType, bool)`

GetUserDefinedFieldsOk returns a tuple with the UserDefinedFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserDefinedFields

`func (o *SuspendedStayType) SetUserDefinedFields(v UserDefinedFieldsType)`

SetUserDefinedFields sets UserDefinedFields field to given value.

### HasUserDefinedFields

`func (o *SuspendedStayType) HasUserDefinedFields() bool`

HasUserDefinedFields returns a boolean if a field has been set.

### GetSuspendedStayRevenues

`func (o *SuspendedStayType) GetSuspendedStayRevenues() []SuspendedStayRevenueType`

GetSuspendedStayRevenues returns the SuspendedStayRevenues field if non-nil, zero value otherwise.

### GetSuspendedStayRevenuesOk

`func (o *SuspendedStayType) GetSuspendedStayRevenuesOk() (*[]SuspendedStayRevenueType, bool)`

GetSuspendedStayRevenuesOk returns a tuple with the SuspendedStayRevenues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuspendedStayRevenues

`func (o *SuspendedStayType) SetSuspendedStayRevenues(v []SuspendedStayRevenueType)`

SetSuspendedStayRevenues sets SuspendedStayRevenues field to given value.

### HasSuspendedStayRevenues

`func (o *SuspendedStayType) HasSuspendedStayRevenues() bool`

HasSuspendedStayRevenues returns a boolean if a field has been set.

### GetSuspendedStayErrors

`func (o *SuspendedStayType) GetSuspendedStayErrors() []SuspendedStayErrorType`

GetSuspendedStayErrors returns the SuspendedStayErrors field if non-nil, zero value otherwise.

### GetSuspendedStayErrorsOk

`func (o *SuspendedStayType) GetSuspendedStayErrorsOk() (*[]SuspendedStayErrorType, bool)`

GetSuspendedStayErrorsOk returns a tuple with the SuspendedStayErrors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuspendedStayErrors

`func (o *SuspendedStayType) SetSuspendedStayErrors(v []SuspendedStayErrorType)`

SetSuspendedStayErrors sets SuspendedStayErrors field to given value.

### HasSuspendedStayErrors

`func (o *SuspendedStayType) HasSuspendedStayErrors() bool`

HasSuspendedStayErrors returns a boolean if a field has been set.

### GetSuspendedStayDailyRates

`func (o *SuspendedStayType) GetSuspendedStayDailyRates() []SuspendedStayDailyRateType`

GetSuspendedStayDailyRates returns the SuspendedStayDailyRates field if non-nil, zero value otherwise.

### GetSuspendedStayDailyRatesOk

`func (o *SuspendedStayType) GetSuspendedStayDailyRatesOk() (*[]SuspendedStayDailyRateType, bool)`

GetSuspendedStayDailyRatesOk returns a tuple with the SuspendedStayDailyRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuspendedStayDailyRates

`func (o *SuspendedStayType) SetSuspendedStayDailyRates(v []SuspendedStayDailyRateType)`

SetSuspendedStayDailyRates sets SuspendedStayDailyRates field to given value.

### HasSuspendedStayDailyRates

`func (o *SuspendedStayType) HasSuspendedStayDailyRates() bool`

HasSuspendedStayDailyRates returns a boolean if a field has been set.

### GetSuspendedStayMemberships

`func (o *SuspendedStayType) GetSuspendedStayMemberships() []SuspendedStayMembershipType`

GetSuspendedStayMemberships returns the SuspendedStayMemberships field if non-nil, zero value otherwise.

### GetSuspendedStayMembershipsOk

`func (o *SuspendedStayType) GetSuspendedStayMembershipsOk() (*[]SuspendedStayMembershipType, bool)`

GetSuspendedStayMembershipsOk returns a tuple with the SuspendedStayMemberships field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuspendedStayMemberships

`func (o *SuspendedStayType) SetSuspendedStayMemberships(v []SuspendedStayMembershipType)`

SetSuspendedStayMemberships sets SuspendedStayMemberships field to given value.

### HasSuspendedStayMemberships

`func (o *SuspendedStayType) HasSuspendedStayMemberships() bool`

HasSuspendedStayMemberships returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


