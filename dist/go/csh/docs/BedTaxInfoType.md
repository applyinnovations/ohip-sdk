# BedTaxInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property associated with bed tax | [optional] 
**TaxRegistrationNo** | Pointer to **int32** | Tax Registration Number | [optional] 
**TaxArrivaldate** | Pointer to **string** | Arrival Date with time of the reservation | [optional] 
**ArrivalCarrierCode** | Pointer to **string** | Arrival Carrier code of the mode of transportation (Airline No. or Railway No., etc.) | [optional] 
**TaxDepartureDate** | Pointer to **string** | Departure Date with time of the reservation | [optional] 
**DepartureCarrierCode** | Pointer to **string** | Departure Carrier code of the mode of transportation (Airline No. or Railway No., etc.) | [optional] 
**GuestName** | Pointer to **string** | Guest name associated with the transaction. | [optional] 
**ReservationNameId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**GuestNameId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Arrival** | Pointer to **string** | Arrival Date of the reservation | [optional] 
**Departure** | Pointer to **string** | Departure Date with time of the reservation | [optional] 
**VisaNumber** | Pointer to **string** | Visa Number | [optional] 
**VisaIssueDate** | Pointer to **string** | Issue date of the Visa | [optional] 
**VisaExpirationDate** | Pointer to **string** | Expiration date of visa | [optional] 
**TaxNoOfStays** | Pointer to **int32** | Total number of tax stays at the property | [optional] 
**Profession** | Pointer to **string** | Profession of the guest | [optional] 
**PassPortStr** | Pointer to **string** | Passport number | [optional] 
**Passport** | Pointer to **string** | Passport number | [optional] 
**Nationality** | Pointer to **string** | Nationality of the guest | [optional] 
**GuestAge** | Pointer to **int32** | Age of the guest | [optional] 
**Country** | Pointer to **string** | Country of the guest | [optional] 
**Remark** | Pointer to **string** | User-defined remark. | [optional] 

## Methods

### NewBedTaxInfoType

`func NewBedTaxInfoType() *BedTaxInfoType`

NewBedTaxInfoType instantiates a new BedTaxInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBedTaxInfoTypeWithDefaults

`func NewBedTaxInfoTypeWithDefaults() *BedTaxInfoType`

NewBedTaxInfoTypeWithDefaults instantiates a new BedTaxInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *BedTaxInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *BedTaxInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *BedTaxInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *BedTaxInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetTaxRegistrationNo

`func (o *BedTaxInfoType) GetTaxRegistrationNo() int32`

GetTaxRegistrationNo returns the TaxRegistrationNo field if non-nil, zero value otherwise.

### GetTaxRegistrationNoOk

`func (o *BedTaxInfoType) GetTaxRegistrationNoOk() (*int32, bool)`

GetTaxRegistrationNoOk returns a tuple with the TaxRegistrationNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxRegistrationNo

`func (o *BedTaxInfoType) SetTaxRegistrationNo(v int32)`

SetTaxRegistrationNo sets TaxRegistrationNo field to given value.

### HasTaxRegistrationNo

`func (o *BedTaxInfoType) HasTaxRegistrationNo() bool`

HasTaxRegistrationNo returns a boolean if a field has been set.

### GetTaxArrivaldate

`func (o *BedTaxInfoType) GetTaxArrivaldate() string`

GetTaxArrivaldate returns the TaxArrivaldate field if non-nil, zero value otherwise.

### GetTaxArrivaldateOk

`func (o *BedTaxInfoType) GetTaxArrivaldateOk() (*string, bool)`

GetTaxArrivaldateOk returns a tuple with the TaxArrivaldate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxArrivaldate

`func (o *BedTaxInfoType) SetTaxArrivaldate(v string)`

SetTaxArrivaldate sets TaxArrivaldate field to given value.

### HasTaxArrivaldate

`func (o *BedTaxInfoType) HasTaxArrivaldate() bool`

HasTaxArrivaldate returns a boolean if a field has been set.

### GetArrivalCarrierCode

`func (o *BedTaxInfoType) GetArrivalCarrierCode() string`

GetArrivalCarrierCode returns the ArrivalCarrierCode field if non-nil, zero value otherwise.

### GetArrivalCarrierCodeOk

`func (o *BedTaxInfoType) GetArrivalCarrierCodeOk() (*string, bool)`

GetArrivalCarrierCodeOk returns a tuple with the ArrivalCarrierCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrivalCarrierCode

`func (o *BedTaxInfoType) SetArrivalCarrierCode(v string)`

SetArrivalCarrierCode sets ArrivalCarrierCode field to given value.

### HasArrivalCarrierCode

`func (o *BedTaxInfoType) HasArrivalCarrierCode() bool`

HasArrivalCarrierCode returns a boolean if a field has been set.

### GetTaxDepartureDate

`func (o *BedTaxInfoType) GetTaxDepartureDate() string`

GetTaxDepartureDate returns the TaxDepartureDate field if non-nil, zero value otherwise.

### GetTaxDepartureDateOk

`func (o *BedTaxInfoType) GetTaxDepartureDateOk() (*string, bool)`

GetTaxDepartureDateOk returns a tuple with the TaxDepartureDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxDepartureDate

`func (o *BedTaxInfoType) SetTaxDepartureDate(v string)`

SetTaxDepartureDate sets TaxDepartureDate field to given value.

### HasTaxDepartureDate

`func (o *BedTaxInfoType) HasTaxDepartureDate() bool`

HasTaxDepartureDate returns a boolean if a field has been set.

### GetDepartureCarrierCode

`func (o *BedTaxInfoType) GetDepartureCarrierCode() string`

GetDepartureCarrierCode returns the DepartureCarrierCode field if non-nil, zero value otherwise.

### GetDepartureCarrierCodeOk

`func (o *BedTaxInfoType) GetDepartureCarrierCodeOk() (*string, bool)`

GetDepartureCarrierCodeOk returns a tuple with the DepartureCarrierCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartureCarrierCode

`func (o *BedTaxInfoType) SetDepartureCarrierCode(v string)`

SetDepartureCarrierCode sets DepartureCarrierCode field to given value.

### HasDepartureCarrierCode

`func (o *BedTaxInfoType) HasDepartureCarrierCode() bool`

HasDepartureCarrierCode returns a boolean if a field has been set.

### GetGuestName

`func (o *BedTaxInfoType) GetGuestName() string`

GetGuestName returns the GuestName field if non-nil, zero value otherwise.

### GetGuestNameOk

`func (o *BedTaxInfoType) GetGuestNameOk() (*string, bool)`

GetGuestNameOk returns a tuple with the GuestName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestName

`func (o *BedTaxInfoType) SetGuestName(v string)`

SetGuestName sets GuestName field to given value.

### HasGuestName

`func (o *BedTaxInfoType) HasGuestName() bool`

HasGuestName returns a boolean if a field has been set.

### GetReservationNameId

`func (o *BedTaxInfoType) GetReservationNameId() UniqueIDType`

GetReservationNameId returns the ReservationNameId field if non-nil, zero value otherwise.

### GetReservationNameIdOk

`func (o *BedTaxInfoType) GetReservationNameIdOk() (*UniqueIDType, bool)`

GetReservationNameIdOk returns a tuple with the ReservationNameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationNameId

`func (o *BedTaxInfoType) SetReservationNameId(v UniqueIDType)`

SetReservationNameId sets ReservationNameId field to given value.

### HasReservationNameId

`func (o *BedTaxInfoType) HasReservationNameId() bool`

HasReservationNameId returns a boolean if a field has been set.

### GetGuestNameId

`func (o *BedTaxInfoType) GetGuestNameId() UniqueIDType`

GetGuestNameId returns the GuestNameId field if non-nil, zero value otherwise.

### GetGuestNameIdOk

`func (o *BedTaxInfoType) GetGuestNameIdOk() (*UniqueIDType, bool)`

GetGuestNameIdOk returns a tuple with the GuestNameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestNameId

`func (o *BedTaxInfoType) SetGuestNameId(v UniqueIDType)`

SetGuestNameId sets GuestNameId field to given value.

### HasGuestNameId

`func (o *BedTaxInfoType) HasGuestNameId() bool`

HasGuestNameId returns a boolean if a field has been set.

### GetArrival

`func (o *BedTaxInfoType) GetArrival() string`

GetArrival returns the Arrival field if non-nil, zero value otherwise.

### GetArrivalOk

`func (o *BedTaxInfoType) GetArrivalOk() (*string, bool)`

GetArrivalOk returns a tuple with the Arrival field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrival

`func (o *BedTaxInfoType) SetArrival(v string)`

SetArrival sets Arrival field to given value.

### HasArrival

`func (o *BedTaxInfoType) HasArrival() bool`

HasArrival returns a boolean if a field has been set.

### GetDeparture

`func (o *BedTaxInfoType) GetDeparture() string`

GetDeparture returns the Departure field if non-nil, zero value otherwise.

### GetDepartureOk

`func (o *BedTaxInfoType) GetDepartureOk() (*string, bool)`

GetDepartureOk returns a tuple with the Departure field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeparture

`func (o *BedTaxInfoType) SetDeparture(v string)`

SetDeparture sets Departure field to given value.

### HasDeparture

`func (o *BedTaxInfoType) HasDeparture() bool`

HasDeparture returns a boolean if a field has been set.

### GetVisaNumber

`func (o *BedTaxInfoType) GetVisaNumber() string`

GetVisaNumber returns the VisaNumber field if non-nil, zero value otherwise.

### GetVisaNumberOk

`func (o *BedTaxInfoType) GetVisaNumberOk() (*string, bool)`

GetVisaNumberOk returns a tuple with the VisaNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVisaNumber

`func (o *BedTaxInfoType) SetVisaNumber(v string)`

SetVisaNumber sets VisaNumber field to given value.

### HasVisaNumber

`func (o *BedTaxInfoType) HasVisaNumber() bool`

HasVisaNumber returns a boolean if a field has been set.

### GetVisaIssueDate

`func (o *BedTaxInfoType) GetVisaIssueDate() string`

GetVisaIssueDate returns the VisaIssueDate field if non-nil, zero value otherwise.

### GetVisaIssueDateOk

`func (o *BedTaxInfoType) GetVisaIssueDateOk() (*string, bool)`

GetVisaIssueDateOk returns a tuple with the VisaIssueDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVisaIssueDate

`func (o *BedTaxInfoType) SetVisaIssueDate(v string)`

SetVisaIssueDate sets VisaIssueDate field to given value.

### HasVisaIssueDate

`func (o *BedTaxInfoType) HasVisaIssueDate() bool`

HasVisaIssueDate returns a boolean if a field has been set.

### GetVisaExpirationDate

`func (o *BedTaxInfoType) GetVisaExpirationDate() string`

GetVisaExpirationDate returns the VisaExpirationDate field if non-nil, zero value otherwise.

### GetVisaExpirationDateOk

`func (o *BedTaxInfoType) GetVisaExpirationDateOk() (*string, bool)`

GetVisaExpirationDateOk returns a tuple with the VisaExpirationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVisaExpirationDate

`func (o *BedTaxInfoType) SetVisaExpirationDate(v string)`

SetVisaExpirationDate sets VisaExpirationDate field to given value.

### HasVisaExpirationDate

`func (o *BedTaxInfoType) HasVisaExpirationDate() bool`

HasVisaExpirationDate returns a boolean if a field has been set.

### GetTaxNoOfStays

`func (o *BedTaxInfoType) GetTaxNoOfStays() int32`

GetTaxNoOfStays returns the TaxNoOfStays field if non-nil, zero value otherwise.

### GetTaxNoOfStaysOk

`func (o *BedTaxInfoType) GetTaxNoOfStaysOk() (*int32, bool)`

GetTaxNoOfStaysOk returns a tuple with the TaxNoOfStays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxNoOfStays

`func (o *BedTaxInfoType) SetTaxNoOfStays(v int32)`

SetTaxNoOfStays sets TaxNoOfStays field to given value.

### HasTaxNoOfStays

`func (o *BedTaxInfoType) HasTaxNoOfStays() bool`

HasTaxNoOfStays returns a boolean if a field has been set.

### GetProfession

`func (o *BedTaxInfoType) GetProfession() string`

GetProfession returns the Profession field if non-nil, zero value otherwise.

### GetProfessionOk

`func (o *BedTaxInfoType) GetProfessionOk() (*string, bool)`

GetProfessionOk returns a tuple with the Profession field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfession

`func (o *BedTaxInfoType) SetProfession(v string)`

SetProfession sets Profession field to given value.

### HasProfession

`func (o *BedTaxInfoType) HasProfession() bool`

HasProfession returns a boolean if a field has been set.

### GetPassPortStr

`func (o *BedTaxInfoType) GetPassPortStr() string`

GetPassPortStr returns the PassPortStr field if non-nil, zero value otherwise.

### GetPassPortStrOk

`func (o *BedTaxInfoType) GetPassPortStrOk() (*string, bool)`

GetPassPortStrOk returns a tuple with the PassPortStr field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPassPortStr

`func (o *BedTaxInfoType) SetPassPortStr(v string)`

SetPassPortStr sets PassPortStr field to given value.

### HasPassPortStr

`func (o *BedTaxInfoType) HasPassPortStr() bool`

HasPassPortStr returns a boolean if a field has been set.

### GetPassport

`func (o *BedTaxInfoType) GetPassport() string`

GetPassport returns the Passport field if non-nil, zero value otherwise.

### GetPassportOk

`func (o *BedTaxInfoType) GetPassportOk() (*string, bool)`

GetPassportOk returns a tuple with the Passport field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPassport

`func (o *BedTaxInfoType) SetPassport(v string)`

SetPassport sets Passport field to given value.

### HasPassport

`func (o *BedTaxInfoType) HasPassport() bool`

HasPassport returns a boolean if a field has been set.

### GetNationality

`func (o *BedTaxInfoType) GetNationality() string`

GetNationality returns the Nationality field if non-nil, zero value otherwise.

### GetNationalityOk

`func (o *BedTaxInfoType) GetNationalityOk() (*string, bool)`

GetNationalityOk returns a tuple with the Nationality field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNationality

`func (o *BedTaxInfoType) SetNationality(v string)`

SetNationality sets Nationality field to given value.

### HasNationality

`func (o *BedTaxInfoType) HasNationality() bool`

HasNationality returns a boolean if a field has been set.

### GetGuestAge

`func (o *BedTaxInfoType) GetGuestAge() int32`

GetGuestAge returns the GuestAge field if non-nil, zero value otherwise.

### GetGuestAgeOk

`func (o *BedTaxInfoType) GetGuestAgeOk() (*int32, bool)`

GetGuestAgeOk returns a tuple with the GuestAge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestAge

`func (o *BedTaxInfoType) SetGuestAge(v int32)`

SetGuestAge sets GuestAge field to given value.

### HasGuestAge

`func (o *BedTaxInfoType) HasGuestAge() bool`

HasGuestAge returns a boolean if a field has been set.

### GetCountry

`func (o *BedTaxInfoType) GetCountry() string`

GetCountry returns the Country field if non-nil, zero value otherwise.

### GetCountryOk

`func (o *BedTaxInfoType) GetCountryOk() (*string, bool)`

GetCountryOk returns a tuple with the Country field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountry

`func (o *BedTaxInfoType) SetCountry(v string)`

SetCountry sets Country field to given value.

### HasCountry

`func (o *BedTaxInfoType) HasCountry() bool`

HasCountry returns a boolean if a field has been set.

### GetRemark

`func (o *BedTaxInfoType) GetRemark() string`

GetRemark returns the Remark field if non-nil, zero value otherwise.

### GetRemarkOk

`func (o *BedTaxInfoType) GetRemarkOk() (*string, bool)`

GetRemarkOk returns a tuple with the Remark field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemark

`func (o *BedTaxInfoType) SetRemark(v string)`

SetRemark sets Remark field to given value.

### HasRemark

`func (o *BedTaxInfoType) HasRemark() bool`

HasRemark returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


