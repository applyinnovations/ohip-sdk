# StayRecordsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UDFC01** | Pointer to **string** | Describes the user defined field 01 | [optional] 
**UDFC02** | Pointer to **string** | Describes the user defined field 02 | [optional] 
**UDFC03** | Pointer to **string** | Describes the user defined field 03 | [optional] 
**UDFC04** | Pointer to **string** | Describes the user defined field 04 | [optional] 
**UDFC05** | Pointer to **string** | Describes the user defined field 05 | [optional] 
**UDFC06** | Pointer to **string** | Describes the user defined field 06 | [optional] 
**UDFC07** | Pointer to **string** | Describes the user defined field 07 | [optional] 
**UDFC08** | Pointer to **string** | Describes the user defined field 08 | [optional] 
**UDFC09** | Pointer to **string** | Describes the user defined field 09 | [optional] 
**UDFC10** | Pointer to **string** | Describes the user defined field 10 | [optional] 
**UDFD01** | Pointer to **string** | Describes the user defined field 01 | [optional] 
**UDFD02** | Pointer to **string** | Describes the user defined field 02 | [optional] 
**UDFD03** | Pointer to **string** | Describes the user defined field 03 | [optional] 
**UDFD04** | Pointer to **string** | Describes the user defined field 04 | [optional] 
**UDFD05** | Pointer to **string** | Describes the user defined field 05 | [optional] 
**UDFN01** | Pointer to **float32** | Describes the user defined field 10 | [optional] 
**UDFN02** | Pointer to **float32** | Describes the user defined field 10 | [optional] 
**UDFN03** | Pointer to **float32** | Describes the user defined field 10 | [optional] 
**UDFN04** | Pointer to **float32** | Describes the user defined field 10 | [optional] 
**UDFN05** | Pointer to **float32** | Describes the user defined field 10 | [optional] 
**Adults** | Pointer to **float32** | Describes the number of adults | [optional] 
**ArrivalDate** | Pointer to **string** | Specifies the date of arrival | [optional] 
**BaseRateAmount** | Pointer to **float32** | Specifies the base rate amount | [optional] 
**BaseRateCode** | Pointer to **string** | Specifies the base rate code | [optional] 
**BaseRateCurrencyCode** | Pointer to **string** | Specifies the currency code of the base rate | [optional] 
**BlockCode** | Pointer to **string** | Specifies the block code | [optional] 
**BookedRoomType** | Pointer to **string** | Specifies the type of room booked. | [optional] 
**BookingDate** | Pointer to **string** | Specifies the date of booking. | [optional] 
**CancellationDate** | Pointer to **string** | Specifies the date of cancellation | [optional] 
**Channel** | Pointer to **string** | Specifies the channel | [optional] 
**Children** | Pointer to **float32** | specifies the number of children | [optional] 
**CompanyId** | Pointer to **string** | Specifies the id assigned to the company | [optional] 
**ConfirmationLegNumber** | Pointer to **float32** | Specifies the confirmation leg number | [optional] 
**ConfirmationNumber** | Pointer to **string** | Specifies the confirmation number | [optional] 
**CurrencyCode** | Pointer to **string** | Specifies the currency code | [optional] 
**DepartureDate** | Pointer to **string** | Specifies the date of departure | [optional] 
**ExchangeRate** | Pointer to **float32** | Specifies the exchange rate | [optional] 
**ExternalReservationId** | Pointer to **string** | Describes the id assigned to an external reservation | [optional] 
**GroupId** | Pointer to **string** | Specifies the id assigned to a group | [optional] 
**GuestNameId** | Pointer to **string** | Specifies the id assigned to a guest name | [optional] 
**Complimentary** | Pointer to **bool** | Describes if complimentary or not | [optional] 
**PrimaryShare** | Pointer to **bool** | Describes if it is a primary share | [optional] 
**MiscellaneousId** | Pointer to **string** | Specifies the miscellaneous id | [optional] 
**PaymentMethod** | Pointer to **string** | Specifies the payment method used | [optional] 
**PosCode** | Pointer to **string** | Specifies the postal code | [optional] 
**PromotionCode** | Pointer to **string** | Specifies the promotion code | [optional] 
**ReservationStatus** | Pointer to **string** | Describes the reservation status ie CANCELLED, CHECKED OUT, ARRIVAL etc | [optional] 
**ReservationExpectedArrivalTime** | Pointer to **string** | Specifies the expected arrival time of the reservation | [optional] 
**ReservationExpectedDepartureTime** | Pointer to **string** | Specifies the expected departure time of the reservation | [optional] 
**ReservationInsertSource** | Pointer to **string** | Specifies the insert source for the reservation | [optional] 
**ReservationInsertSourceType** | Pointer to **string** | Specifies the insert source type for the reservation | [optional] 
**RoomId** | Pointer to **string** | Describes the room id of the room owner. | [optional] 
**RoomRevenue** | Pointer to **float32** | Specifies the revenue for the room. | [optional] 
**RoomType** | Pointer to **string** | Describes the type of the room. | [optional] 
**ShareId** | Pointer to **string** | Specifies the share id. | [optional] 
**SourceCode** | Pointer to **string** | Specifies the source code. | [optional] 
**SourceId** | Pointer to **string** | Specifies the source id. | [optional] 
**StageStatus** | Pointer to **string** | Specifies the stage status. | [optional] 
**StageSuspenseReason** | Pointer to **string** | Specifies the stage suspense reason. | [optional] 
**TotalRevenue** | Pointer to **float32** | Specifies the total revenue. | [optional] 
**TravelAgentId** | Pointer to **string** | Specifies the travel agent id | [optional] 

## Methods

### NewStayRecordsType

`func NewStayRecordsType() *StayRecordsType`

NewStayRecordsType instantiates a new StayRecordsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStayRecordsTypeWithDefaults

`func NewStayRecordsTypeWithDefaults() *StayRecordsType`

NewStayRecordsTypeWithDefaults instantiates a new StayRecordsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUDFC01

`func (o *StayRecordsType) GetUDFC01() string`

GetUDFC01 returns the UDFC01 field if non-nil, zero value otherwise.

### GetUDFC01Ok

`func (o *StayRecordsType) GetUDFC01Ok() (*string, bool)`

GetUDFC01Ok returns a tuple with the UDFC01 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUDFC01

`func (o *StayRecordsType) SetUDFC01(v string)`

SetUDFC01 sets UDFC01 field to given value.

### HasUDFC01

`func (o *StayRecordsType) HasUDFC01() bool`

HasUDFC01 returns a boolean if a field has been set.

### GetUDFC02

`func (o *StayRecordsType) GetUDFC02() string`

GetUDFC02 returns the UDFC02 field if non-nil, zero value otherwise.

### GetUDFC02Ok

`func (o *StayRecordsType) GetUDFC02Ok() (*string, bool)`

GetUDFC02Ok returns a tuple with the UDFC02 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUDFC02

`func (o *StayRecordsType) SetUDFC02(v string)`

SetUDFC02 sets UDFC02 field to given value.

### HasUDFC02

`func (o *StayRecordsType) HasUDFC02() bool`

HasUDFC02 returns a boolean if a field has been set.

### GetUDFC03

`func (o *StayRecordsType) GetUDFC03() string`

GetUDFC03 returns the UDFC03 field if non-nil, zero value otherwise.

### GetUDFC03Ok

`func (o *StayRecordsType) GetUDFC03Ok() (*string, bool)`

GetUDFC03Ok returns a tuple with the UDFC03 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUDFC03

`func (o *StayRecordsType) SetUDFC03(v string)`

SetUDFC03 sets UDFC03 field to given value.

### HasUDFC03

`func (o *StayRecordsType) HasUDFC03() bool`

HasUDFC03 returns a boolean if a field has been set.

### GetUDFC04

`func (o *StayRecordsType) GetUDFC04() string`

GetUDFC04 returns the UDFC04 field if non-nil, zero value otherwise.

### GetUDFC04Ok

`func (o *StayRecordsType) GetUDFC04Ok() (*string, bool)`

GetUDFC04Ok returns a tuple with the UDFC04 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUDFC04

`func (o *StayRecordsType) SetUDFC04(v string)`

SetUDFC04 sets UDFC04 field to given value.

### HasUDFC04

`func (o *StayRecordsType) HasUDFC04() bool`

HasUDFC04 returns a boolean if a field has been set.

### GetUDFC05

`func (o *StayRecordsType) GetUDFC05() string`

GetUDFC05 returns the UDFC05 field if non-nil, zero value otherwise.

### GetUDFC05Ok

`func (o *StayRecordsType) GetUDFC05Ok() (*string, bool)`

GetUDFC05Ok returns a tuple with the UDFC05 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUDFC05

`func (o *StayRecordsType) SetUDFC05(v string)`

SetUDFC05 sets UDFC05 field to given value.

### HasUDFC05

`func (o *StayRecordsType) HasUDFC05() bool`

HasUDFC05 returns a boolean if a field has been set.

### GetUDFC06

`func (o *StayRecordsType) GetUDFC06() string`

GetUDFC06 returns the UDFC06 field if non-nil, zero value otherwise.

### GetUDFC06Ok

`func (o *StayRecordsType) GetUDFC06Ok() (*string, bool)`

GetUDFC06Ok returns a tuple with the UDFC06 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUDFC06

`func (o *StayRecordsType) SetUDFC06(v string)`

SetUDFC06 sets UDFC06 field to given value.

### HasUDFC06

`func (o *StayRecordsType) HasUDFC06() bool`

HasUDFC06 returns a boolean if a field has been set.

### GetUDFC07

`func (o *StayRecordsType) GetUDFC07() string`

GetUDFC07 returns the UDFC07 field if non-nil, zero value otherwise.

### GetUDFC07Ok

`func (o *StayRecordsType) GetUDFC07Ok() (*string, bool)`

GetUDFC07Ok returns a tuple with the UDFC07 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUDFC07

`func (o *StayRecordsType) SetUDFC07(v string)`

SetUDFC07 sets UDFC07 field to given value.

### HasUDFC07

`func (o *StayRecordsType) HasUDFC07() bool`

HasUDFC07 returns a boolean if a field has been set.

### GetUDFC08

`func (o *StayRecordsType) GetUDFC08() string`

GetUDFC08 returns the UDFC08 field if non-nil, zero value otherwise.

### GetUDFC08Ok

`func (o *StayRecordsType) GetUDFC08Ok() (*string, bool)`

GetUDFC08Ok returns a tuple with the UDFC08 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUDFC08

`func (o *StayRecordsType) SetUDFC08(v string)`

SetUDFC08 sets UDFC08 field to given value.

### HasUDFC08

`func (o *StayRecordsType) HasUDFC08() bool`

HasUDFC08 returns a boolean if a field has been set.

### GetUDFC09

`func (o *StayRecordsType) GetUDFC09() string`

GetUDFC09 returns the UDFC09 field if non-nil, zero value otherwise.

### GetUDFC09Ok

`func (o *StayRecordsType) GetUDFC09Ok() (*string, bool)`

GetUDFC09Ok returns a tuple with the UDFC09 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUDFC09

`func (o *StayRecordsType) SetUDFC09(v string)`

SetUDFC09 sets UDFC09 field to given value.

### HasUDFC09

`func (o *StayRecordsType) HasUDFC09() bool`

HasUDFC09 returns a boolean if a field has been set.

### GetUDFC10

`func (o *StayRecordsType) GetUDFC10() string`

GetUDFC10 returns the UDFC10 field if non-nil, zero value otherwise.

### GetUDFC10Ok

`func (o *StayRecordsType) GetUDFC10Ok() (*string, bool)`

GetUDFC10Ok returns a tuple with the UDFC10 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUDFC10

`func (o *StayRecordsType) SetUDFC10(v string)`

SetUDFC10 sets UDFC10 field to given value.

### HasUDFC10

`func (o *StayRecordsType) HasUDFC10() bool`

HasUDFC10 returns a boolean if a field has been set.

### GetUDFD01

`func (o *StayRecordsType) GetUDFD01() string`

GetUDFD01 returns the UDFD01 field if non-nil, zero value otherwise.

### GetUDFD01Ok

`func (o *StayRecordsType) GetUDFD01Ok() (*string, bool)`

GetUDFD01Ok returns a tuple with the UDFD01 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUDFD01

`func (o *StayRecordsType) SetUDFD01(v string)`

SetUDFD01 sets UDFD01 field to given value.

### HasUDFD01

`func (o *StayRecordsType) HasUDFD01() bool`

HasUDFD01 returns a boolean if a field has been set.

### GetUDFD02

`func (o *StayRecordsType) GetUDFD02() string`

GetUDFD02 returns the UDFD02 field if non-nil, zero value otherwise.

### GetUDFD02Ok

`func (o *StayRecordsType) GetUDFD02Ok() (*string, bool)`

GetUDFD02Ok returns a tuple with the UDFD02 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUDFD02

`func (o *StayRecordsType) SetUDFD02(v string)`

SetUDFD02 sets UDFD02 field to given value.

### HasUDFD02

`func (o *StayRecordsType) HasUDFD02() bool`

HasUDFD02 returns a boolean if a field has been set.

### GetUDFD03

`func (o *StayRecordsType) GetUDFD03() string`

GetUDFD03 returns the UDFD03 field if non-nil, zero value otherwise.

### GetUDFD03Ok

`func (o *StayRecordsType) GetUDFD03Ok() (*string, bool)`

GetUDFD03Ok returns a tuple with the UDFD03 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUDFD03

`func (o *StayRecordsType) SetUDFD03(v string)`

SetUDFD03 sets UDFD03 field to given value.

### HasUDFD03

`func (o *StayRecordsType) HasUDFD03() bool`

HasUDFD03 returns a boolean if a field has been set.

### GetUDFD04

`func (o *StayRecordsType) GetUDFD04() string`

GetUDFD04 returns the UDFD04 field if non-nil, zero value otherwise.

### GetUDFD04Ok

`func (o *StayRecordsType) GetUDFD04Ok() (*string, bool)`

GetUDFD04Ok returns a tuple with the UDFD04 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUDFD04

`func (o *StayRecordsType) SetUDFD04(v string)`

SetUDFD04 sets UDFD04 field to given value.

### HasUDFD04

`func (o *StayRecordsType) HasUDFD04() bool`

HasUDFD04 returns a boolean if a field has been set.

### GetUDFD05

`func (o *StayRecordsType) GetUDFD05() string`

GetUDFD05 returns the UDFD05 field if non-nil, zero value otherwise.

### GetUDFD05Ok

`func (o *StayRecordsType) GetUDFD05Ok() (*string, bool)`

GetUDFD05Ok returns a tuple with the UDFD05 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUDFD05

`func (o *StayRecordsType) SetUDFD05(v string)`

SetUDFD05 sets UDFD05 field to given value.

### HasUDFD05

`func (o *StayRecordsType) HasUDFD05() bool`

HasUDFD05 returns a boolean if a field has been set.

### GetUDFN01

`func (o *StayRecordsType) GetUDFN01() float32`

GetUDFN01 returns the UDFN01 field if non-nil, zero value otherwise.

### GetUDFN01Ok

`func (o *StayRecordsType) GetUDFN01Ok() (*float32, bool)`

GetUDFN01Ok returns a tuple with the UDFN01 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUDFN01

`func (o *StayRecordsType) SetUDFN01(v float32)`

SetUDFN01 sets UDFN01 field to given value.

### HasUDFN01

`func (o *StayRecordsType) HasUDFN01() bool`

HasUDFN01 returns a boolean if a field has been set.

### GetUDFN02

`func (o *StayRecordsType) GetUDFN02() float32`

GetUDFN02 returns the UDFN02 field if non-nil, zero value otherwise.

### GetUDFN02Ok

`func (o *StayRecordsType) GetUDFN02Ok() (*float32, bool)`

GetUDFN02Ok returns a tuple with the UDFN02 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUDFN02

`func (o *StayRecordsType) SetUDFN02(v float32)`

SetUDFN02 sets UDFN02 field to given value.

### HasUDFN02

`func (o *StayRecordsType) HasUDFN02() bool`

HasUDFN02 returns a boolean if a field has been set.

### GetUDFN03

`func (o *StayRecordsType) GetUDFN03() float32`

GetUDFN03 returns the UDFN03 field if non-nil, zero value otherwise.

### GetUDFN03Ok

`func (o *StayRecordsType) GetUDFN03Ok() (*float32, bool)`

GetUDFN03Ok returns a tuple with the UDFN03 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUDFN03

`func (o *StayRecordsType) SetUDFN03(v float32)`

SetUDFN03 sets UDFN03 field to given value.

### HasUDFN03

`func (o *StayRecordsType) HasUDFN03() bool`

HasUDFN03 returns a boolean if a field has been set.

### GetUDFN04

`func (o *StayRecordsType) GetUDFN04() float32`

GetUDFN04 returns the UDFN04 field if non-nil, zero value otherwise.

### GetUDFN04Ok

`func (o *StayRecordsType) GetUDFN04Ok() (*float32, bool)`

GetUDFN04Ok returns a tuple with the UDFN04 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUDFN04

`func (o *StayRecordsType) SetUDFN04(v float32)`

SetUDFN04 sets UDFN04 field to given value.

### HasUDFN04

`func (o *StayRecordsType) HasUDFN04() bool`

HasUDFN04 returns a boolean if a field has been set.

### GetUDFN05

`func (o *StayRecordsType) GetUDFN05() float32`

GetUDFN05 returns the UDFN05 field if non-nil, zero value otherwise.

### GetUDFN05Ok

`func (o *StayRecordsType) GetUDFN05Ok() (*float32, bool)`

GetUDFN05Ok returns a tuple with the UDFN05 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUDFN05

`func (o *StayRecordsType) SetUDFN05(v float32)`

SetUDFN05 sets UDFN05 field to given value.

### HasUDFN05

`func (o *StayRecordsType) HasUDFN05() bool`

HasUDFN05 returns a boolean if a field has been set.

### GetAdults

`func (o *StayRecordsType) GetAdults() float32`

GetAdults returns the Adults field if non-nil, zero value otherwise.

### GetAdultsOk

`func (o *StayRecordsType) GetAdultsOk() (*float32, bool)`

GetAdultsOk returns a tuple with the Adults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdults

`func (o *StayRecordsType) SetAdults(v float32)`

SetAdults sets Adults field to given value.

### HasAdults

`func (o *StayRecordsType) HasAdults() bool`

HasAdults returns a boolean if a field has been set.

### GetArrivalDate

`func (o *StayRecordsType) GetArrivalDate() string`

GetArrivalDate returns the ArrivalDate field if non-nil, zero value otherwise.

### GetArrivalDateOk

`func (o *StayRecordsType) GetArrivalDateOk() (*string, bool)`

GetArrivalDateOk returns a tuple with the ArrivalDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrivalDate

`func (o *StayRecordsType) SetArrivalDate(v string)`

SetArrivalDate sets ArrivalDate field to given value.

### HasArrivalDate

`func (o *StayRecordsType) HasArrivalDate() bool`

HasArrivalDate returns a boolean if a field has been set.

### GetBaseRateAmount

`func (o *StayRecordsType) GetBaseRateAmount() float32`

GetBaseRateAmount returns the BaseRateAmount field if non-nil, zero value otherwise.

### GetBaseRateAmountOk

`func (o *StayRecordsType) GetBaseRateAmountOk() (*float32, bool)`

GetBaseRateAmountOk returns a tuple with the BaseRateAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseRateAmount

`func (o *StayRecordsType) SetBaseRateAmount(v float32)`

SetBaseRateAmount sets BaseRateAmount field to given value.

### HasBaseRateAmount

`func (o *StayRecordsType) HasBaseRateAmount() bool`

HasBaseRateAmount returns a boolean if a field has been set.

### GetBaseRateCode

`func (o *StayRecordsType) GetBaseRateCode() string`

GetBaseRateCode returns the BaseRateCode field if non-nil, zero value otherwise.

### GetBaseRateCodeOk

`func (o *StayRecordsType) GetBaseRateCodeOk() (*string, bool)`

GetBaseRateCodeOk returns a tuple with the BaseRateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseRateCode

`func (o *StayRecordsType) SetBaseRateCode(v string)`

SetBaseRateCode sets BaseRateCode field to given value.

### HasBaseRateCode

`func (o *StayRecordsType) HasBaseRateCode() bool`

HasBaseRateCode returns a boolean if a field has been set.

### GetBaseRateCurrencyCode

`func (o *StayRecordsType) GetBaseRateCurrencyCode() string`

GetBaseRateCurrencyCode returns the BaseRateCurrencyCode field if non-nil, zero value otherwise.

### GetBaseRateCurrencyCodeOk

`func (o *StayRecordsType) GetBaseRateCurrencyCodeOk() (*string, bool)`

GetBaseRateCurrencyCodeOk returns a tuple with the BaseRateCurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseRateCurrencyCode

`func (o *StayRecordsType) SetBaseRateCurrencyCode(v string)`

SetBaseRateCurrencyCode sets BaseRateCurrencyCode field to given value.

### HasBaseRateCurrencyCode

`func (o *StayRecordsType) HasBaseRateCurrencyCode() bool`

HasBaseRateCurrencyCode returns a boolean if a field has been set.

### GetBlockCode

`func (o *StayRecordsType) GetBlockCode() string`

GetBlockCode returns the BlockCode field if non-nil, zero value otherwise.

### GetBlockCodeOk

`func (o *StayRecordsType) GetBlockCodeOk() (*string, bool)`

GetBlockCodeOk returns a tuple with the BlockCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockCode

`func (o *StayRecordsType) SetBlockCode(v string)`

SetBlockCode sets BlockCode field to given value.

### HasBlockCode

`func (o *StayRecordsType) HasBlockCode() bool`

HasBlockCode returns a boolean if a field has been set.

### GetBookedRoomType

`func (o *StayRecordsType) GetBookedRoomType() string`

GetBookedRoomType returns the BookedRoomType field if non-nil, zero value otherwise.

### GetBookedRoomTypeOk

`func (o *StayRecordsType) GetBookedRoomTypeOk() (*string, bool)`

GetBookedRoomTypeOk returns a tuple with the BookedRoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookedRoomType

`func (o *StayRecordsType) SetBookedRoomType(v string)`

SetBookedRoomType sets BookedRoomType field to given value.

### HasBookedRoomType

`func (o *StayRecordsType) HasBookedRoomType() bool`

HasBookedRoomType returns a boolean if a field has been set.

### GetBookingDate

`func (o *StayRecordsType) GetBookingDate() string`

GetBookingDate returns the BookingDate field if non-nil, zero value otherwise.

### GetBookingDateOk

`func (o *StayRecordsType) GetBookingDateOk() (*string, bool)`

GetBookingDateOk returns a tuple with the BookingDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingDate

`func (o *StayRecordsType) SetBookingDate(v string)`

SetBookingDate sets BookingDate field to given value.

### HasBookingDate

`func (o *StayRecordsType) HasBookingDate() bool`

HasBookingDate returns a boolean if a field has been set.

### GetCancellationDate

`func (o *StayRecordsType) GetCancellationDate() string`

GetCancellationDate returns the CancellationDate field if non-nil, zero value otherwise.

### GetCancellationDateOk

`func (o *StayRecordsType) GetCancellationDateOk() (*string, bool)`

GetCancellationDateOk returns a tuple with the CancellationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationDate

`func (o *StayRecordsType) SetCancellationDate(v string)`

SetCancellationDate sets CancellationDate field to given value.

### HasCancellationDate

`func (o *StayRecordsType) HasCancellationDate() bool`

HasCancellationDate returns a boolean if a field has been set.

### GetChannel

`func (o *StayRecordsType) GetChannel() string`

GetChannel returns the Channel field if non-nil, zero value otherwise.

### GetChannelOk

`func (o *StayRecordsType) GetChannelOk() (*string, bool)`

GetChannelOk returns a tuple with the Channel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannel

`func (o *StayRecordsType) SetChannel(v string)`

SetChannel sets Channel field to given value.

### HasChannel

`func (o *StayRecordsType) HasChannel() bool`

HasChannel returns a boolean if a field has been set.

### GetChildren

`func (o *StayRecordsType) GetChildren() float32`

GetChildren returns the Children field if non-nil, zero value otherwise.

### GetChildrenOk

`func (o *StayRecordsType) GetChildrenOk() (*float32, bool)`

GetChildrenOk returns a tuple with the Children field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildren

`func (o *StayRecordsType) SetChildren(v float32)`

SetChildren sets Children field to given value.

### HasChildren

`func (o *StayRecordsType) HasChildren() bool`

HasChildren returns a boolean if a field has been set.

### GetCompanyId

`func (o *StayRecordsType) GetCompanyId() string`

GetCompanyId returns the CompanyId field if non-nil, zero value otherwise.

### GetCompanyIdOk

`func (o *StayRecordsType) GetCompanyIdOk() (*string, bool)`

GetCompanyIdOk returns a tuple with the CompanyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanyId

`func (o *StayRecordsType) SetCompanyId(v string)`

SetCompanyId sets CompanyId field to given value.

### HasCompanyId

`func (o *StayRecordsType) HasCompanyId() bool`

HasCompanyId returns a boolean if a field has been set.

### GetConfirmationLegNumber

`func (o *StayRecordsType) GetConfirmationLegNumber() float32`

GetConfirmationLegNumber returns the ConfirmationLegNumber field if non-nil, zero value otherwise.

### GetConfirmationLegNumberOk

`func (o *StayRecordsType) GetConfirmationLegNumberOk() (*float32, bool)`

GetConfirmationLegNumberOk returns a tuple with the ConfirmationLegNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfirmationLegNumber

`func (o *StayRecordsType) SetConfirmationLegNumber(v float32)`

SetConfirmationLegNumber sets ConfirmationLegNumber field to given value.

### HasConfirmationLegNumber

`func (o *StayRecordsType) HasConfirmationLegNumber() bool`

HasConfirmationLegNumber returns a boolean if a field has been set.

### GetConfirmationNumber

`func (o *StayRecordsType) GetConfirmationNumber() string`

GetConfirmationNumber returns the ConfirmationNumber field if non-nil, zero value otherwise.

### GetConfirmationNumberOk

`func (o *StayRecordsType) GetConfirmationNumberOk() (*string, bool)`

GetConfirmationNumberOk returns a tuple with the ConfirmationNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfirmationNumber

`func (o *StayRecordsType) SetConfirmationNumber(v string)`

SetConfirmationNumber sets ConfirmationNumber field to given value.

### HasConfirmationNumber

`func (o *StayRecordsType) HasConfirmationNumber() bool`

HasConfirmationNumber returns a boolean if a field has been set.

### GetCurrencyCode

`func (o *StayRecordsType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *StayRecordsType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *StayRecordsType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *StayRecordsType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetDepartureDate

`func (o *StayRecordsType) GetDepartureDate() string`

GetDepartureDate returns the DepartureDate field if non-nil, zero value otherwise.

### GetDepartureDateOk

`func (o *StayRecordsType) GetDepartureDateOk() (*string, bool)`

GetDepartureDateOk returns a tuple with the DepartureDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartureDate

`func (o *StayRecordsType) SetDepartureDate(v string)`

SetDepartureDate sets DepartureDate field to given value.

### HasDepartureDate

`func (o *StayRecordsType) HasDepartureDate() bool`

HasDepartureDate returns a boolean if a field has been set.

### GetExchangeRate

`func (o *StayRecordsType) GetExchangeRate() float32`

GetExchangeRate returns the ExchangeRate field if non-nil, zero value otherwise.

### GetExchangeRateOk

`func (o *StayRecordsType) GetExchangeRateOk() (*float32, bool)`

GetExchangeRateOk returns a tuple with the ExchangeRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExchangeRate

`func (o *StayRecordsType) SetExchangeRate(v float32)`

SetExchangeRate sets ExchangeRate field to given value.

### HasExchangeRate

`func (o *StayRecordsType) HasExchangeRate() bool`

HasExchangeRate returns a boolean if a field has been set.

### GetExternalReservationId

`func (o *StayRecordsType) GetExternalReservationId() string`

GetExternalReservationId returns the ExternalReservationId field if non-nil, zero value otherwise.

### GetExternalReservationIdOk

`func (o *StayRecordsType) GetExternalReservationIdOk() (*string, bool)`

GetExternalReservationIdOk returns a tuple with the ExternalReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalReservationId

`func (o *StayRecordsType) SetExternalReservationId(v string)`

SetExternalReservationId sets ExternalReservationId field to given value.

### HasExternalReservationId

`func (o *StayRecordsType) HasExternalReservationId() bool`

HasExternalReservationId returns a boolean if a field has been set.

### GetGroupId

`func (o *StayRecordsType) GetGroupId() string`

GetGroupId returns the GroupId field if non-nil, zero value otherwise.

### GetGroupIdOk

`func (o *StayRecordsType) GetGroupIdOk() (*string, bool)`

GetGroupIdOk returns a tuple with the GroupId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupId

`func (o *StayRecordsType) SetGroupId(v string)`

SetGroupId sets GroupId field to given value.

### HasGroupId

`func (o *StayRecordsType) HasGroupId() bool`

HasGroupId returns a boolean if a field has been set.

### GetGuestNameId

`func (o *StayRecordsType) GetGuestNameId() string`

GetGuestNameId returns the GuestNameId field if non-nil, zero value otherwise.

### GetGuestNameIdOk

`func (o *StayRecordsType) GetGuestNameIdOk() (*string, bool)`

GetGuestNameIdOk returns a tuple with the GuestNameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestNameId

`func (o *StayRecordsType) SetGuestNameId(v string)`

SetGuestNameId sets GuestNameId field to given value.

### HasGuestNameId

`func (o *StayRecordsType) HasGuestNameId() bool`

HasGuestNameId returns a boolean if a field has been set.

### GetComplimentary

`func (o *StayRecordsType) GetComplimentary() bool`

GetComplimentary returns the Complimentary field if non-nil, zero value otherwise.

### GetComplimentaryOk

`func (o *StayRecordsType) GetComplimentaryOk() (*bool, bool)`

GetComplimentaryOk returns a tuple with the Complimentary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComplimentary

`func (o *StayRecordsType) SetComplimentary(v bool)`

SetComplimentary sets Complimentary field to given value.

### HasComplimentary

`func (o *StayRecordsType) HasComplimentary() bool`

HasComplimentary returns a boolean if a field has been set.

### GetPrimaryShare

`func (o *StayRecordsType) GetPrimaryShare() bool`

GetPrimaryShare returns the PrimaryShare field if non-nil, zero value otherwise.

### GetPrimaryShareOk

`func (o *StayRecordsType) GetPrimaryShareOk() (*bool, bool)`

GetPrimaryShareOk returns a tuple with the PrimaryShare field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryShare

`func (o *StayRecordsType) SetPrimaryShare(v bool)`

SetPrimaryShare sets PrimaryShare field to given value.

### HasPrimaryShare

`func (o *StayRecordsType) HasPrimaryShare() bool`

HasPrimaryShare returns a boolean if a field has been set.

### GetMiscellaneousId

`func (o *StayRecordsType) GetMiscellaneousId() string`

GetMiscellaneousId returns the MiscellaneousId field if non-nil, zero value otherwise.

### GetMiscellaneousIdOk

`func (o *StayRecordsType) GetMiscellaneousIdOk() (*string, bool)`

GetMiscellaneousIdOk returns a tuple with the MiscellaneousId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMiscellaneousId

`func (o *StayRecordsType) SetMiscellaneousId(v string)`

SetMiscellaneousId sets MiscellaneousId field to given value.

### HasMiscellaneousId

`func (o *StayRecordsType) HasMiscellaneousId() bool`

HasMiscellaneousId returns a boolean if a field has been set.

### GetPaymentMethod

`func (o *StayRecordsType) GetPaymentMethod() string`

GetPaymentMethod returns the PaymentMethod field if non-nil, zero value otherwise.

### GetPaymentMethodOk

`func (o *StayRecordsType) GetPaymentMethodOk() (*string, bool)`

GetPaymentMethodOk returns a tuple with the PaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethod

`func (o *StayRecordsType) SetPaymentMethod(v string)`

SetPaymentMethod sets PaymentMethod field to given value.

### HasPaymentMethod

`func (o *StayRecordsType) HasPaymentMethod() bool`

HasPaymentMethod returns a boolean if a field has been set.

### GetPosCode

`func (o *StayRecordsType) GetPosCode() string`

GetPosCode returns the PosCode field if non-nil, zero value otherwise.

### GetPosCodeOk

`func (o *StayRecordsType) GetPosCodeOk() (*string, bool)`

GetPosCodeOk returns a tuple with the PosCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPosCode

`func (o *StayRecordsType) SetPosCode(v string)`

SetPosCode sets PosCode field to given value.

### HasPosCode

`func (o *StayRecordsType) HasPosCode() bool`

HasPosCode returns a boolean if a field has been set.

### GetPromotionCode

`func (o *StayRecordsType) GetPromotionCode() string`

GetPromotionCode returns the PromotionCode field if non-nil, zero value otherwise.

### GetPromotionCodeOk

`func (o *StayRecordsType) GetPromotionCodeOk() (*string, bool)`

GetPromotionCodeOk returns a tuple with the PromotionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromotionCode

`func (o *StayRecordsType) SetPromotionCode(v string)`

SetPromotionCode sets PromotionCode field to given value.

### HasPromotionCode

`func (o *StayRecordsType) HasPromotionCode() bool`

HasPromotionCode returns a boolean if a field has been set.

### GetReservationStatus

`func (o *StayRecordsType) GetReservationStatus() string`

GetReservationStatus returns the ReservationStatus field if non-nil, zero value otherwise.

### GetReservationStatusOk

`func (o *StayRecordsType) GetReservationStatusOk() (*string, bool)`

GetReservationStatusOk returns a tuple with the ReservationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationStatus

`func (o *StayRecordsType) SetReservationStatus(v string)`

SetReservationStatus sets ReservationStatus field to given value.

### HasReservationStatus

`func (o *StayRecordsType) HasReservationStatus() bool`

HasReservationStatus returns a boolean if a field has been set.

### GetReservationExpectedArrivalTime

`func (o *StayRecordsType) GetReservationExpectedArrivalTime() string`

GetReservationExpectedArrivalTime returns the ReservationExpectedArrivalTime field if non-nil, zero value otherwise.

### GetReservationExpectedArrivalTimeOk

`func (o *StayRecordsType) GetReservationExpectedArrivalTimeOk() (*string, bool)`

GetReservationExpectedArrivalTimeOk returns a tuple with the ReservationExpectedArrivalTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationExpectedArrivalTime

`func (o *StayRecordsType) SetReservationExpectedArrivalTime(v string)`

SetReservationExpectedArrivalTime sets ReservationExpectedArrivalTime field to given value.

### HasReservationExpectedArrivalTime

`func (o *StayRecordsType) HasReservationExpectedArrivalTime() bool`

HasReservationExpectedArrivalTime returns a boolean if a field has been set.

### GetReservationExpectedDepartureTime

`func (o *StayRecordsType) GetReservationExpectedDepartureTime() string`

GetReservationExpectedDepartureTime returns the ReservationExpectedDepartureTime field if non-nil, zero value otherwise.

### GetReservationExpectedDepartureTimeOk

`func (o *StayRecordsType) GetReservationExpectedDepartureTimeOk() (*string, bool)`

GetReservationExpectedDepartureTimeOk returns a tuple with the ReservationExpectedDepartureTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationExpectedDepartureTime

`func (o *StayRecordsType) SetReservationExpectedDepartureTime(v string)`

SetReservationExpectedDepartureTime sets ReservationExpectedDepartureTime field to given value.

### HasReservationExpectedDepartureTime

`func (o *StayRecordsType) HasReservationExpectedDepartureTime() bool`

HasReservationExpectedDepartureTime returns a boolean if a field has been set.

### GetReservationInsertSource

`func (o *StayRecordsType) GetReservationInsertSource() string`

GetReservationInsertSource returns the ReservationInsertSource field if non-nil, zero value otherwise.

### GetReservationInsertSourceOk

`func (o *StayRecordsType) GetReservationInsertSourceOk() (*string, bool)`

GetReservationInsertSourceOk returns a tuple with the ReservationInsertSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationInsertSource

`func (o *StayRecordsType) SetReservationInsertSource(v string)`

SetReservationInsertSource sets ReservationInsertSource field to given value.

### HasReservationInsertSource

`func (o *StayRecordsType) HasReservationInsertSource() bool`

HasReservationInsertSource returns a boolean if a field has been set.

### GetReservationInsertSourceType

`func (o *StayRecordsType) GetReservationInsertSourceType() string`

GetReservationInsertSourceType returns the ReservationInsertSourceType field if non-nil, zero value otherwise.

### GetReservationInsertSourceTypeOk

`func (o *StayRecordsType) GetReservationInsertSourceTypeOk() (*string, bool)`

GetReservationInsertSourceTypeOk returns a tuple with the ReservationInsertSourceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationInsertSourceType

`func (o *StayRecordsType) SetReservationInsertSourceType(v string)`

SetReservationInsertSourceType sets ReservationInsertSourceType field to given value.

### HasReservationInsertSourceType

`func (o *StayRecordsType) HasReservationInsertSourceType() bool`

HasReservationInsertSourceType returns a boolean if a field has been set.

### GetRoomId

`func (o *StayRecordsType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *StayRecordsType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *StayRecordsType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *StayRecordsType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetRoomRevenue

`func (o *StayRecordsType) GetRoomRevenue() float32`

GetRoomRevenue returns the RoomRevenue field if non-nil, zero value otherwise.

### GetRoomRevenueOk

`func (o *StayRecordsType) GetRoomRevenueOk() (*float32, bool)`

GetRoomRevenueOk returns a tuple with the RoomRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomRevenue

`func (o *StayRecordsType) SetRoomRevenue(v float32)`

SetRoomRevenue sets RoomRevenue field to given value.

### HasRoomRevenue

`func (o *StayRecordsType) HasRoomRevenue() bool`

HasRoomRevenue returns a boolean if a field has been set.

### GetRoomType

`func (o *StayRecordsType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *StayRecordsType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *StayRecordsType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *StayRecordsType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetShareId

`func (o *StayRecordsType) GetShareId() string`

GetShareId returns the ShareId field if non-nil, zero value otherwise.

### GetShareIdOk

`func (o *StayRecordsType) GetShareIdOk() (*string, bool)`

GetShareIdOk returns a tuple with the ShareId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShareId

`func (o *StayRecordsType) SetShareId(v string)`

SetShareId sets ShareId field to given value.

### HasShareId

`func (o *StayRecordsType) HasShareId() bool`

HasShareId returns a boolean if a field has been set.

### GetSourceCode

`func (o *StayRecordsType) GetSourceCode() string`

GetSourceCode returns the SourceCode field if non-nil, zero value otherwise.

### GetSourceCodeOk

`func (o *StayRecordsType) GetSourceCodeOk() (*string, bool)`

GetSourceCodeOk returns a tuple with the SourceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceCode

`func (o *StayRecordsType) SetSourceCode(v string)`

SetSourceCode sets SourceCode field to given value.

### HasSourceCode

`func (o *StayRecordsType) HasSourceCode() bool`

HasSourceCode returns a boolean if a field has been set.

### GetSourceId

`func (o *StayRecordsType) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *StayRecordsType) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *StayRecordsType) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *StayRecordsType) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetStageStatus

`func (o *StayRecordsType) GetStageStatus() string`

GetStageStatus returns the StageStatus field if non-nil, zero value otherwise.

### GetStageStatusOk

`func (o *StayRecordsType) GetStageStatusOk() (*string, bool)`

GetStageStatusOk returns a tuple with the StageStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStageStatus

`func (o *StayRecordsType) SetStageStatus(v string)`

SetStageStatus sets StageStatus field to given value.

### HasStageStatus

`func (o *StayRecordsType) HasStageStatus() bool`

HasStageStatus returns a boolean if a field has been set.

### GetStageSuspenseReason

`func (o *StayRecordsType) GetStageSuspenseReason() string`

GetStageSuspenseReason returns the StageSuspenseReason field if non-nil, zero value otherwise.

### GetStageSuspenseReasonOk

`func (o *StayRecordsType) GetStageSuspenseReasonOk() (*string, bool)`

GetStageSuspenseReasonOk returns a tuple with the StageSuspenseReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStageSuspenseReason

`func (o *StayRecordsType) SetStageSuspenseReason(v string)`

SetStageSuspenseReason sets StageSuspenseReason field to given value.

### HasStageSuspenseReason

`func (o *StayRecordsType) HasStageSuspenseReason() bool`

HasStageSuspenseReason returns a boolean if a field has been set.

### GetTotalRevenue

`func (o *StayRecordsType) GetTotalRevenue() float32`

GetTotalRevenue returns the TotalRevenue field if non-nil, zero value otherwise.

### GetTotalRevenueOk

`func (o *StayRecordsType) GetTotalRevenueOk() (*float32, bool)`

GetTotalRevenueOk returns a tuple with the TotalRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRevenue

`func (o *StayRecordsType) SetTotalRevenue(v float32)`

SetTotalRevenue sets TotalRevenue field to given value.

### HasTotalRevenue

`func (o *StayRecordsType) HasTotalRevenue() bool`

HasTotalRevenue returns a boolean if a field has been set.

### GetTravelAgentId

`func (o *StayRecordsType) GetTravelAgentId() string`

GetTravelAgentId returns the TravelAgentId field if non-nil, zero value otherwise.

### GetTravelAgentIdOk

`func (o *StayRecordsType) GetTravelAgentIdOk() (*string, bool)`

GetTravelAgentIdOk returns a tuple with the TravelAgentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTravelAgentId

`func (o *StayRecordsType) SetTravelAgentId(v string)`

SetTravelAgentId sets TravelAgentId field to given value.

### HasTravelAgentId

`func (o *StayRecordsType) HasTravelAgentId() bool`

HasTravelAgentId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


