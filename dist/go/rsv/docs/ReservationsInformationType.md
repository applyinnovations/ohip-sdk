# ReservationsInformationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property code. | [optional] 
**ReservationIdList** | Pointer to [**[]DistinctIDType**](DistinctIDType.md) | Unique identifiers for both internal and external systems Eg: ReservationId, ConfirmationNumber, CancellationNumber, ExternalReferenceNumber etc | [optional] 
**ExternalReferences** | Pointer to [**[]ExternalReferenceType**](ExternalReferenceType.md) | This type contains unique information of external reference. | [optional] 
**GuestDetails** | Pointer to [**GuestDetails**](GuestDetails.md) |  | [optional] 
**ReservationDates** | Pointer to [**ReservationDates**](ReservationDates.md) |  | [optional] 
**CompanyDetails** | Pointer to [**CompanyDetails**](CompanyDetails.md) |  | [optional] 
**TravelAgentDetails** | Pointer to [**TravelAgentDetails**](TravelAgentDetails.md) |  | [optional] 
**GroupDetails** | Pointer to [**GroupDetails**](GroupDetails.md) |  | [optional] 
**BlockIdList** | Pointer to [**[]DistinctIDType**](DistinctIDType.md) | Unique identifiers for Blocks. Eg: BlockId, BlockCode | [optional] 
**MembershipDetails** | Pointer to [**MembershipDetails**](MembershipDetails.md) |  | [optional] 
**Adults** | Pointer to **int32** | Total number of adults. | [optional] 
**Children** | Pointer to **int32** | Number of children. | [optional] 
**NoOfRooms** | Pointer to **int32** | Number of rooms. | [optional] 
**Amount** | Pointer to **float32** | Total share amount. | [optional] 
**Balance** | Pointer to **float32** | Balance. | [optional] 
**RateCode** | Pointer to **string** | Rate code used for the reservation. | [optional] 
**CurrencyCode** | Pointer to **string** | Currency code. | [optional] 
**ReservationStatus** | Pointer to **string** | Reservation status. | [optional] 
**ComputedReservationStatus** | Pointer to **string** | Computed reservation status. | [optional] 
**CreatorId** | Pointer to **string** | Internal User ID used to create reservation. | [optional] 
**LastModifierId** | Pointer to **string** | Internal User ID used to update the reservation details. | [optional] 
**GuaranteeCode** | Pointer to **string** | Reservation guarantee code. | [optional] 
**PaymentType** | Pointer to **string** | Payment method used for the reservation. | [optional] 
**Nights** | Pointer to **int32** | Number of Nights | [optional] 
**PromotionCode** | Pointer to **string** | Promotion Code for the Reservation. | [optional] 
**RoomId** | Pointer to **string** | Room Number. | [optional] 
**SourceCode** | Pointer to **string** | Source of the created reservation. | [optional] 
**OriginCode** | Pointer to **string** | Channel used to create the reservation. | [optional] 
**MarketCode** | Pointer to **string** | Market code of the reservation. | [optional] 
**ArrivalTime** | Pointer to **string** | Arrival Time of reservation. | [optional] 
**DepartureTime** | Pointer to **string** | Departure Time of reservation. | [optional] 
**RoomType** | Pointer to **string** | Room Type. | [optional] 
**BookedRoomType** | Pointer to **string** | Booked Room Type. | [optional] 
**VipStatus** | Pointer to **string** | VIP Status. | [optional] 
**LinkCode** | Pointer to **string** | Party code. | [optional] 
**RegistrationCardNumber** | Pointer to **string** | Registration card number. | [optional] 
**PreRegistered** | Pointer to **bool** | Indicates whether the reservation is pre-registered for internet check-in or not. | [optional] 
**AdvancedCheckedIn** | Pointer to **bool** | Indicates if the reservation has performed an Advance Check In. | [optional] 
**Shared** | Pointer to **bool** | Indicates if the reservation is shared or not. | [optional] 

## Methods

### NewReservationsInformationType

`func NewReservationsInformationType() *ReservationsInformationType`

NewReservationsInformationType instantiates a new ReservationsInformationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationsInformationTypeWithDefaults

`func NewReservationsInformationTypeWithDefaults() *ReservationsInformationType`

NewReservationsInformationTypeWithDefaults instantiates a new ReservationsInformationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ReservationsInformationType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ReservationsInformationType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ReservationsInformationType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ReservationsInformationType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationIdList

`func (o *ReservationsInformationType) GetReservationIdList() []DistinctIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *ReservationsInformationType) GetReservationIdListOk() (*[]DistinctIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *ReservationsInformationType) SetReservationIdList(v []DistinctIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *ReservationsInformationType) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetExternalReferences

`func (o *ReservationsInformationType) GetExternalReferences() []ExternalReferenceType`

GetExternalReferences returns the ExternalReferences field if non-nil, zero value otherwise.

### GetExternalReferencesOk

`func (o *ReservationsInformationType) GetExternalReferencesOk() (*[]ExternalReferenceType, bool)`

GetExternalReferencesOk returns a tuple with the ExternalReferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalReferences

`func (o *ReservationsInformationType) SetExternalReferences(v []ExternalReferenceType)`

SetExternalReferences sets ExternalReferences field to given value.

### HasExternalReferences

`func (o *ReservationsInformationType) HasExternalReferences() bool`

HasExternalReferences returns a boolean if a field has been set.

### GetGuestDetails

`func (o *ReservationsInformationType) GetGuestDetails() GuestDetails`

GetGuestDetails returns the GuestDetails field if non-nil, zero value otherwise.

### GetGuestDetailsOk

`func (o *ReservationsInformationType) GetGuestDetailsOk() (*GuestDetails, bool)`

GetGuestDetailsOk returns a tuple with the GuestDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestDetails

`func (o *ReservationsInformationType) SetGuestDetails(v GuestDetails)`

SetGuestDetails sets GuestDetails field to given value.

### HasGuestDetails

`func (o *ReservationsInformationType) HasGuestDetails() bool`

HasGuestDetails returns a boolean if a field has been set.

### GetReservationDates

`func (o *ReservationsInformationType) GetReservationDates() ReservationDates`

GetReservationDates returns the ReservationDates field if non-nil, zero value otherwise.

### GetReservationDatesOk

`func (o *ReservationsInformationType) GetReservationDatesOk() (*ReservationDates, bool)`

GetReservationDatesOk returns a tuple with the ReservationDates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationDates

`func (o *ReservationsInformationType) SetReservationDates(v ReservationDates)`

SetReservationDates sets ReservationDates field to given value.

### HasReservationDates

`func (o *ReservationsInformationType) HasReservationDates() bool`

HasReservationDates returns a boolean if a field has been set.

### GetCompanyDetails

`func (o *ReservationsInformationType) GetCompanyDetails() CompanyDetails`

GetCompanyDetails returns the CompanyDetails field if non-nil, zero value otherwise.

### GetCompanyDetailsOk

`func (o *ReservationsInformationType) GetCompanyDetailsOk() (*CompanyDetails, bool)`

GetCompanyDetailsOk returns a tuple with the CompanyDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanyDetails

`func (o *ReservationsInformationType) SetCompanyDetails(v CompanyDetails)`

SetCompanyDetails sets CompanyDetails field to given value.

### HasCompanyDetails

`func (o *ReservationsInformationType) HasCompanyDetails() bool`

HasCompanyDetails returns a boolean if a field has been set.

### GetTravelAgentDetails

`func (o *ReservationsInformationType) GetTravelAgentDetails() TravelAgentDetails`

GetTravelAgentDetails returns the TravelAgentDetails field if non-nil, zero value otherwise.

### GetTravelAgentDetailsOk

`func (o *ReservationsInformationType) GetTravelAgentDetailsOk() (*TravelAgentDetails, bool)`

GetTravelAgentDetailsOk returns a tuple with the TravelAgentDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTravelAgentDetails

`func (o *ReservationsInformationType) SetTravelAgentDetails(v TravelAgentDetails)`

SetTravelAgentDetails sets TravelAgentDetails field to given value.

### HasTravelAgentDetails

`func (o *ReservationsInformationType) HasTravelAgentDetails() bool`

HasTravelAgentDetails returns a boolean if a field has been set.

### GetGroupDetails

`func (o *ReservationsInformationType) GetGroupDetails() GroupDetails`

GetGroupDetails returns the GroupDetails field if non-nil, zero value otherwise.

### GetGroupDetailsOk

`func (o *ReservationsInformationType) GetGroupDetailsOk() (*GroupDetails, bool)`

GetGroupDetailsOk returns a tuple with the GroupDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupDetails

`func (o *ReservationsInformationType) SetGroupDetails(v GroupDetails)`

SetGroupDetails sets GroupDetails field to given value.

### HasGroupDetails

`func (o *ReservationsInformationType) HasGroupDetails() bool`

HasGroupDetails returns a boolean if a field has been set.

### GetBlockIdList

`func (o *ReservationsInformationType) GetBlockIdList() []DistinctIDType`

GetBlockIdList returns the BlockIdList field if non-nil, zero value otherwise.

### GetBlockIdListOk

`func (o *ReservationsInformationType) GetBlockIdListOk() (*[]DistinctIDType, bool)`

GetBlockIdListOk returns a tuple with the BlockIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockIdList

`func (o *ReservationsInformationType) SetBlockIdList(v []DistinctIDType)`

SetBlockIdList sets BlockIdList field to given value.

### HasBlockIdList

`func (o *ReservationsInformationType) HasBlockIdList() bool`

HasBlockIdList returns a boolean if a field has been set.

### GetMembershipDetails

`func (o *ReservationsInformationType) GetMembershipDetails() MembershipDetails`

GetMembershipDetails returns the MembershipDetails field if non-nil, zero value otherwise.

### GetMembershipDetailsOk

`func (o *ReservationsInformationType) GetMembershipDetailsOk() (*MembershipDetails, bool)`

GetMembershipDetailsOk returns a tuple with the MembershipDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipDetails

`func (o *ReservationsInformationType) SetMembershipDetails(v MembershipDetails)`

SetMembershipDetails sets MembershipDetails field to given value.

### HasMembershipDetails

`func (o *ReservationsInformationType) HasMembershipDetails() bool`

HasMembershipDetails returns a boolean if a field has been set.

### GetAdults

`func (o *ReservationsInformationType) GetAdults() int32`

GetAdults returns the Adults field if non-nil, zero value otherwise.

### GetAdultsOk

`func (o *ReservationsInformationType) GetAdultsOk() (*int32, bool)`

GetAdultsOk returns a tuple with the Adults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdults

`func (o *ReservationsInformationType) SetAdults(v int32)`

SetAdults sets Adults field to given value.

### HasAdults

`func (o *ReservationsInformationType) HasAdults() bool`

HasAdults returns a boolean if a field has been set.

### GetChildren

`func (o *ReservationsInformationType) GetChildren() int32`

GetChildren returns the Children field if non-nil, zero value otherwise.

### GetChildrenOk

`func (o *ReservationsInformationType) GetChildrenOk() (*int32, bool)`

GetChildrenOk returns a tuple with the Children field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildren

`func (o *ReservationsInformationType) SetChildren(v int32)`

SetChildren sets Children field to given value.

### HasChildren

`func (o *ReservationsInformationType) HasChildren() bool`

HasChildren returns a boolean if a field has been set.

### GetNoOfRooms

`func (o *ReservationsInformationType) GetNoOfRooms() int32`

GetNoOfRooms returns the NoOfRooms field if non-nil, zero value otherwise.

### GetNoOfRoomsOk

`func (o *ReservationsInformationType) GetNoOfRoomsOk() (*int32, bool)`

GetNoOfRoomsOk returns a tuple with the NoOfRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoOfRooms

`func (o *ReservationsInformationType) SetNoOfRooms(v int32)`

SetNoOfRooms sets NoOfRooms field to given value.

### HasNoOfRooms

`func (o *ReservationsInformationType) HasNoOfRooms() bool`

HasNoOfRooms returns a boolean if a field has been set.

### GetAmount

`func (o *ReservationsInformationType) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *ReservationsInformationType) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *ReservationsInformationType) SetAmount(v float32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *ReservationsInformationType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetBalance

`func (o *ReservationsInformationType) GetBalance() float32`

GetBalance returns the Balance field if non-nil, zero value otherwise.

### GetBalanceOk

`func (o *ReservationsInformationType) GetBalanceOk() (*float32, bool)`

GetBalanceOk returns a tuple with the Balance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBalance

`func (o *ReservationsInformationType) SetBalance(v float32)`

SetBalance sets Balance field to given value.

### HasBalance

`func (o *ReservationsInformationType) HasBalance() bool`

HasBalance returns a boolean if a field has been set.

### GetRateCode

`func (o *ReservationsInformationType) GetRateCode() string`

GetRateCode returns the RateCode field if non-nil, zero value otherwise.

### GetRateCodeOk

`func (o *ReservationsInformationType) GetRateCodeOk() (*string, bool)`

GetRateCodeOk returns a tuple with the RateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCode

`func (o *ReservationsInformationType) SetRateCode(v string)`

SetRateCode sets RateCode field to given value.

### HasRateCode

`func (o *ReservationsInformationType) HasRateCode() bool`

HasRateCode returns a boolean if a field has been set.

### GetCurrencyCode

`func (o *ReservationsInformationType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *ReservationsInformationType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *ReservationsInformationType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *ReservationsInformationType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetReservationStatus

`func (o *ReservationsInformationType) GetReservationStatus() string`

GetReservationStatus returns the ReservationStatus field if non-nil, zero value otherwise.

### GetReservationStatusOk

`func (o *ReservationsInformationType) GetReservationStatusOk() (*string, bool)`

GetReservationStatusOk returns a tuple with the ReservationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationStatus

`func (o *ReservationsInformationType) SetReservationStatus(v string)`

SetReservationStatus sets ReservationStatus field to given value.

### HasReservationStatus

`func (o *ReservationsInformationType) HasReservationStatus() bool`

HasReservationStatus returns a boolean if a field has been set.

### GetComputedReservationStatus

`func (o *ReservationsInformationType) GetComputedReservationStatus() string`

GetComputedReservationStatus returns the ComputedReservationStatus field if non-nil, zero value otherwise.

### GetComputedReservationStatusOk

`func (o *ReservationsInformationType) GetComputedReservationStatusOk() (*string, bool)`

GetComputedReservationStatusOk returns a tuple with the ComputedReservationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComputedReservationStatus

`func (o *ReservationsInformationType) SetComputedReservationStatus(v string)`

SetComputedReservationStatus sets ComputedReservationStatus field to given value.

### HasComputedReservationStatus

`func (o *ReservationsInformationType) HasComputedReservationStatus() bool`

HasComputedReservationStatus returns a boolean if a field has been set.

### GetCreatorId

`func (o *ReservationsInformationType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *ReservationsInformationType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *ReservationsInformationType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *ReservationsInformationType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetLastModifierId

`func (o *ReservationsInformationType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *ReservationsInformationType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *ReservationsInformationType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *ReservationsInformationType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetGuaranteeCode

`func (o *ReservationsInformationType) GetGuaranteeCode() string`

GetGuaranteeCode returns the GuaranteeCode field if non-nil, zero value otherwise.

### GetGuaranteeCodeOk

`func (o *ReservationsInformationType) GetGuaranteeCodeOk() (*string, bool)`

GetGuaranteeCodeOk returns a tuple with the GuaranteeCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuaranteeCode

`func (o *ReservationsInformationType) SetGuaranteeCode(v string)`

SetGuaranteeCode sets GuaranteeCode field to given value.

### HasGuaranteeCode

`func (o *ReservationsInformationType) HasGuaranteeCode() bool`

HasGuaranteeCode returns a boolean if a field has been set.

### GetPaymentType

`func (o *ReservationsInformationType) GetPaymentType() string`

GetPaymentType returns the PaymentType field if non-nil, zero value otherwise.

### GetPaymentTypeOk

`func (o *ReservationsInformationType) GetPaymentTypeOk() (*string, bool)`

GetPaymentTypeOk returns a tuple with the PaymentType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentType

`func (o *ReservationsInformationType) SetPaymentType(v string)`

SetPaymentType sets PaymentType field to given value.

### HasPaymentType

`func (o *ReservationsInformationType) HasPaymentType() bool`

HasPaymentType returns a boolean if a field has been set.

### GetNights

`func (o *ReservationsInformationType) GetNights() int32`

GetNights returns the Nights field if non-nil, zero value otherwise.

### GetNightsOk

`func (o *ReservationsInformationType) GetNightsOk() (*int32, bool)`

GetNightsOk returns a tuple with the Nights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNights

`func (o *ReservationsInformationType) SetNights(v int32)`

SetNights sets Nights field to given value.

### HasNights

`func (o *ReservationsInformationType) HasNights() bool`

HasNights returns a boolean if a field has been set.

### GetPromotionCode

`func (o *ReservationsInformationType) GetPromotionCode() string`

GetPromotionCode returns the PromotionCode field if non-nil, zero value otherwise.

### GetPromotionCodeOk

`func (o *ReservationsInformationType) GetPromotionCodeOk() (*string, bool)`

GetPromotionCodeOk returns a tuple with the PromotionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromotionCode

`func (o *ReservationsInformationType) SetPromotionCode(v string)`

SetPromotionCode sets PromotionCode field to given value.

### HasPromotionCode

`func (o *ReservationsInformationType) HasPromotionCode() bool`

HasPromotionCode returns a boolean if a field has been set.

### GetRoomId

`func (o *ReservationsInformationType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *ReservationsInformationType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *ReservationsInformationType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *ReservationsInformationType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetSourceCode

`func (o *ReservationsInformationType) GetSourceCode() string`

GetSourceCode returns the SourceCode field if non-nil, zero value otherwise.

### GetSourceCodeOk

`func (o *ReservationsInformationType) GetSourceCodeOk() (*string, bool)`

GetSourceCodeOk returns a tuple with the SourceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceCode

`func (o *ReservationsInformationType) SetSourceCode(v string)`

SetSourceCode sets SourceCode field to given value.

### HasSourceCode

`func (o *ReservationsInformationType) HasSourceCode() bool`

HasSourceCode returns a boolean if a field has been set.

### GetOriginCode

`func (o *ReservationsInformationType) GetOriginCode() string`

GetOriginCode returns the OriginCode field if non-nil, zero value otherwise.

### GetOriginCodeOk

`func (o *ReservationsInformationType) GetOriginCodeOk() (*string, bool)`

GetOriginCodeOk returns a tuple with the OriginCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginCode

`func (o *ReservationsInformationType) SetOriginCode(v string)`

SetOriginCode sets OriginCode field to given value.

### HasOriginCode

`func (o *ReservationsInformationType) HasOriginCode() bool`

HasOriginCode returns a boolean if a field has been set.

### GetMarketCode

`func (o *ReservationsInformationType) GetMarketCode() string`

GetMarketCode returns the MarketCode field if non-nil, zero value otherwise.

### GetMarketCodeOk

`func (o *ReservationsInformationType) GetMarketCodeOk() (*string, bool)`

GetMarketCodeOk returns a tuple with the MarketCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketCode

`func (o *ReservationsInformationType) SetMarketCode(v string)`

SetMarketCode sets MarketCode field to given value.

### HasMarketCode

`func (o *ReservationsInformationType) HasMarketCode() bool`

HasMarketCode returns a boolean if a field has been set.

### GetArrivalTime

`func (o *ReservationsInformationType) GetArrivalTime() string`

GetArrivalTime returns the ArrivalTime field if non-nil, zero value otherwise.

### GetArrivalTimeOk

`func (o *ReservationsInformationType) GetArrivalTimeOk() (*string, bool)`

GetArrivalTimeOk returns a tuple with the ArrivalTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrivalTime

`func (o *ReservationsInformationType) SetArrivalTime(v string)`

SetArrivalTime sets ArrivalTime field to given value.

### HasArrivalTime

`func (o *ReservationsInformationType) HasArrivalTime() bool`

HasArrivalTime returns a boolean if a field has been set.

### GetDepartureTime

`func (o *ReservationsInformationType) GetDepartureTime() string`

GetDepartureTime returns the DepartureTime field if non-nil, zero value otherwise.

### GetDepartureTimeOk

`func (o *ReservationsInformationType) GetDepartureTimeOk() (*string, bool)`

GetDepartureTimeOk returns a tuple with the DepartureTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartureTime

`func (o *ReservationsInformationType) SetDepartureTime(v string)`

SetDepartureTime sets DepartureTime field to given value.

### HasDepartureTime

`func (o *ReservationsInformationType) HasDepartureTime() bool`

HasDepartureTime returns a boolean if a field has been set.

### GetRoomType

`func (o *ReservationsInformationType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *ReservationsInformationType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *ReservationsInformationType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *ReservationsInformationType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetBookedRoomType

`func (o *ReservationsInformationType) GetBookedRoomType() string`

GetBookedRoomType returns the BookedRoomType field if non-nil, zero value otherwise.

### GetBookedRoomTypeOk

`func (o *ReservationsInformationType) GetBookedRoomTypeOk() (*string, bool)`

GetBookedRoomTypeOk returns a tuple with the BookedRoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookedRoomType

`func (o *ReservationsInformationType) SetBookedRoomType(v string)`

SetBookedRoomType sets BookedRoomType field to given value.

### HasBookedRoomType

`func (o *ReservationsInformationType) HasBookedRoomType() bool`

HasBookedRoomType returns a boolean if a field has been set.

### GetVipStatus

`func (o *ReservationsInformationType) GetVipStatus() string`

GetVipStatus returns the VipStatus field if non-nil, zero value otherwise.

### GetVipStatusOk

`func (o *ReservationsInformationType) GetVipStatusOk() (*string, bool)`

GetVipStatusOk returns a tuple with the VipStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVipStatus

`func (o *ReservationsInformationType) SetVipStatus(v string)`

SetVipStatus sets VipStatus field to given value.

### HasVipStatus

`func (o *ReservationsInformationType) HasVipStatus() bool`

HasVipStatus returns a boolean if a field has been set.

### GetLinkCode

`func (o *ReservationsInformationType) GetLinkCode() string`

GetLinkCode returns the LinkCode field if non-nil, zero value otherwise.

### GetLinkCodeOk

`func (o *ReservationsInformationType) GetLinkCodeOk() (*string, bool)`

GetLinkCodeOk returns a tuple with the LinkCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinkCode

`func (o *ReservationsInformationType) SetLinkCode(v string)`

SetLinkCode sets LinkCode field to given value.

### HasLinkCode

`func (o *ReservationsInformationType) HasLinkCode() bool`

HasLinkCode returns a boolean if a field has been set.

### GetRegistrationCardNumber

`func (o *ReservationsInformationType) GetRegistrationCardNumber() string`

GetRegistrationCardNumber returns the RegistrationCardNumber field if non-nil, zero value otherwise.

### GetRegistrationCardNumberOk

`func (o *ReservationsInformationType) GetRegistrationCardNumberOk() (*string, bool)`

GetRegistrationCardNumberOk returns a tuple with the RegistrationCardNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegistrationCardNumber

`func (o *ReservationsInformationType) SetRegistrationCardNumber(v string)`

SetRegistrationCardNumber sets RegistrationCardNumber field to given value.

### HasRegistrationCardNumber

`func (o *ReservationsInformationType) HasRegistrationCardNumber() bool`

HasRegistrationCardNumber returns a boolean if a field has been set.

### GetPreRegistered

`func (o *ReservationsInformationType) GetPreRegistered() bool`

GetPreRegistered returns the PreRegistered field if non-nil, zero value otherwise.

### GetPreRegisteredOk

`func (o *ReservationsInformationType) GetPreRegisteredOk() (*bool, bool)`

GetPreRegisteredOk returns a tuple with the PreRegistered field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreRegistered

`func (o *ReservationsInformationType) SetPreRegistered(v bool)`

SetPreRegistered sets PreRegistered field to given value.

### HasPreRegistered

`func (o *ReservationsInformationType) HasPreRegistered() bool`

HasPreRegistered returns a boolean if a field has been set.

### GetAdvancedCheckedIn

`func (o *ReservationsInformationType) GetAdvancedCheckedIn() bool`

GetAdvancedCheckedIn returns the AdvancedCheckedIn field if non-nil, zero value otherwise.

### GetAdvancedCheckedInOk

`func (o *ReservationsInformationType) GetAdvancedCheckedInOk() (*bool, bool)`

GetAdvancedCheckedInOk returns a tuple with the AdvancedCheckedIn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdvancedCheckedIn

`func (o *ReservationsInformationType) SetAdvancedCheckedIn(v bool)`

SetAdvancedCheckedIn sets AdvancedCheckedIn field to given value.

### HasAdvancedCheckedIn

`func (o *ReservationsInformationType) HasAdvancedCheckedIn() bool`

HasAdvancedCheckedIn returns a boolean if a field has been set.

### GetShared

`func (o *ReservationsInformationType) GetShared() bool`

GetShared returns the Shared field if non-nil, zero value otherwise.

### GetSharedOk

`func (o *ReservationsInformationType) GetSharedOk() (*bool, bool)`

GetSharedOk returns a tuple with the Shared field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShared

`func (o *ReservationsInformationType) SetShared(v bool)`

SetShared sets Shared field to given value.

### HasShared

`func (o *ReservationsInformationType) HasShared() bool`

HasShared returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


