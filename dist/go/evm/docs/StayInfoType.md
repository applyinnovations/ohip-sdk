# StayInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ArrivalDate** | Pointer to **string** |  | [optional] 
**DepartureDate** | Pointer to **string** |  | [optional] 
**OriginalTimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**ExpectedTimes** | Pointer to [**ResExpectedTimesType**](ResExpectedTimesType.md) |  | [optional] 
**AdultCount** | Pointer to **int32** | A collection of Guest Counts associated with Room Stay. | [optional] 
**ChildCount** | Pointer to **int32** | A collection of Child Counts associated with Room Stay. | [optional] 
**RoomClass** | Pointer to **string** | Room class code | [optional] 
**RoomType** | Pointer to **string** | Room type code | [optional] 
**ComponentRoomType** | Pointer to **bool** | True indicates functionSpaceDetails type is a component type. | [optional] 
**NumberOfRooms** | Pointer to **int32** | Room Id | [optional] 
**RoomId** | Pointer to **string** | Room Id | [optional] 
**RatePlanCode** | Pointer to **string** | Rate plan code | [optional] 
**RateAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Points** | Pointer to [**PointsType**](PointsType.md) |  | [optional] 
**RateSuppressed** | Pointer to **bool** | Whether this rate should be suppressed from view | [optional] 
**ReservationBlock** | Pointer to [**ReservationBlockType**](ReservationBlockType.md) |  | [optional] 
**BookingChannelCode** | Pointer to **string** | Booking channel code | [optional] 
**LinkCode** | Pointer to **string** | Party code | [optional] 
**FixedRate** | Pointer to **bool** | True if the rate is a fixed rate, otherwise false | [optional] 
**TotalAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Guarantee** | Pointer to [**ResGuaranteeType**](ResGuaranteeType.md) |  | [optional] 
**Promotion** | Pointer to [**PromotionType**](PromotionType.md) |  | [optional] 
**MarketCode** | Pointer to **string** | Market code | [optional] 
**MarketDescription** | Pointer to **string** | Description of Market code | [optional] 
**SourceCode** | Pointer to **string** | Source of business | [optional] 
**SourceCodeDescription** | Pointer to **string** | Description of the source of business. | [optional] 
**Balance** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**CompBalance** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**RoomTypeCharged** | Pointer to **string** | Room type code that was charged | [optional] 
**DepositPayments** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**GuestServiceStatus** | Pointer to [**GuestHousekeepingServiceRequestType**](GuestHousekeepingServiceRequestType.md) |  | [optional] 
**ScheduledCheckoutTime** | Pointer to **string** | Indicates that this reservation is scheduled for automated check out. | [optional] 
**RoomNumberLocked** | Pointer to **bool** | When true, indicates a functionSpaceDetails number cannot be changed. When false, indicates a functionSpaceDetails number may be changed. | [optional] 
**PseudoRoom** | Pointer to **bool** | True indicates as pseudo functionSpaceDetails type. This is usually used for a posting master reservation. | [optional] 
**AssignedByAI** | Pointer to **bool** | Represents the functionSpaceDetails was assigned by AI Room Assignment. | [optional] 
**UpgradedByAI** | Pointer to **bool** | Represents the functionSpaceDetails was assigned by AI Room Assignment. | [optional] 

## Methods

### NewStayInfoType

`func NewStayInfoType() *StayInfoType`

NewStayInfoType instantiates a new StayInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStayInfoTypeWithDefaults

`func NewStayInfoTypeWithDefaults() *StayInfoType`

NewStayInfoTypeWithDefaults instantiates a new StayInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetArrivalDate

`func (o *StayInfoType) GetArrivalDate() string`

GetArrivalDate returns the ArrivalDate field if non-nil, zero value otherwise.

### GetArrivalDateOk

`func (o *StayInfoType) GetArrivalDateOk() (*string, bool)`

GetArrivalDateOk returns a tuple with the ArrivalDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrivalDate

`func (o *StayInfoType) SetArrivalDate(v string)`

SetArrivalDate sets ArrivalDate field to given value.

### HasArrivalDate

`func (o *StayInfoType) HasArrivalDate() bool`

HasArrivalDate returns a boolean if a field has been set.

### GetDepartureDate

`func (o *StayInfoType) GetDepartureDate() string`

GetDepartureDate returns the DepartureDate field if non-nil, zero value otherwise.

### GetDepartureDateOk

`func (o *StayInfoType) GetDepartureDateOk() (*string, bool)`

GetDepartureDateOk returns a tuple with the DepartureDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartureDate

`func (o *StayInfoType) SetDepartureDate(v string)`

SetDepartureDate sets DepartureDate field to given value.

### HasDepartureDate

`func (o *StayInfoType) HasDepartureDate() bool`

HasDepartureDate returns a boolean if a field has been set.

### GetOriginalTimeSpan

`func (o *StayInfoType) GetOriginalTimeSpan() TimeSpanType`

GetOriginalTimeSpan returns the OriginalTimeSpan field if non-nil, zero value otherwise.

### GetOriginalTimeSpanOk

`func (o *StayInfoType) GetOriginalTimeSpanOk() (*TimeSpanType, bool)`

GetOriginalTimeSpanOk returns a tuple with the OriginalTimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginalTimeSpan

`func (o *StayInfoType) SetOriginalTimeSpan(v TimeSpanType)`

SetOriginalTimeSpan sets OriginalTimeSpan field to given value.

### HasOriginalTimeSpan

`func (o *StayInfoType) HasOriginalTimeSpan() bool`

HasOriginalTimeSpan returns a boolean if a field has been set.

### GetExpectedTimes

`func (o *StayInfoType) GetExpectedTimes() ResExpectedTimesType`

GetExpectedTimes returns the ExpectedTimes field if non-nil, zero value otherwise.

### GetExpectedTimesOk

`func (o *StayInfoType) GetExpectedTimesOk() (*ResExpectedTimesType, bool)`

GetExpectedTimesOk returns a tuple with the ExpectedTimes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpectedTimes

`func (o *StayInfoType) SetExpectedTimes(v ResExpectedTimesType)`

SetExpectedTimes sets ExpectedTimes field to given value.

### HasExpectedTimes

`func (o *StayInfoType) HasExpectedTimes() bool`

HasExpectedTimes returns a boolean if a field has been set.

### GetAdultCount

`func (o *StayInfoType) GetAdultCount() int32`

GetAdultCount returns the AdultCount field if non-nil, zero value otherwise.

### GetAdultCountOk

`func (o *StayInfoType) GetAdultCountOk() (*int32, bool)`

GetAdultCountOk returns a tuple with the AdultCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdultCount

`func (o *StayInfoType) SetAdultCount(v int32)`

SetAdultCount sets AdultCount field to given value.

### HasAdultCount

`func (o *StayInfoType) HasAdultCount() bool`

HasAdultCount returns a boolean if a field has been set.

### GetChildCount

`func (o *StayInfoType) GetChildCount() int32`

GetChildCount returns the ChildCount field if non-nil, zero value otherwise.

### GetChildCountOk

`func (o *StayInfoType) GetChildCountOk() (*int32, bool)`

GetChildCountOk returns a tuple with the ChildCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildCount

`func (o *StayInfoType) SetChildCount(v int32)`

SetChildCount sets ChildCount field to given value.

### HasChildCount

`func (o *StayInfoType) HasChildCount() bool`

HasChildCount returns a boolean if a field has been set.

### GetRoomClass

`func (o *StayInfoType) GetRoomClass() string`

GetRoomClass returns the RoomClass field if non-nil, zero value otherwise.

### GetRoomClassOk

`func (o *StayInfoType) GetRoomClassOk() (*string, bool)`

GetRoomClassOk returns a tuple with the RoomClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomClass

`func (o *StayInfoType) SetRoomClass(v string)`

SetRoomClass sets RoomClass field to given value.

### HasRoomClass

`func (o *StayInfoType) HasRoomClass() bool`

HasRoomClass returns a boolean if a field has been set.

### GetRoomType

`func (o *StayInfoType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *StayInfoType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *StayInfoType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *StayInfoType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetComponentRoomType

`func (o *StayInfoType) GetComponentRoomType() bool`

GetComponentRoomType returns the ComponentRoomType field if non-nil, zero value otherwise.

### GetComponentRoomTypeOk

`func (o *StayInfoType) GetComponentRoomTypeOk() (*bool, bool)`

GetComponentRoomTypeOk returns a tuple with the ComponentRoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComponentRoomType

`func (o *StayInfoType) SetComponentRoomType(v bool)`

SetComponentRoomType sets ComponentRoomType field to given value.

### HasComponentRoomType

`func (o *StayInfoType) HasComponentRoomType() bool`

HasComponentRoomType returns a boolean if a field has been set.

### GetNumberOfRooms

`func (o *StayInfoType) GetNumberOfRooms() int32`

GetNumberOfRooms returns the NumberOfRooms field if non-nil, zero value otherwise.

### GetNumberOfRoomsOk

`func (o *StayInfoType) GetNumberOfRoomsOk() (*int32, bool)`

GetNumberOfRoomsOk returns a tuple with the NumberOfRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumberOfRooms

`func (o *StayInfoType) SetNumberOfRooms(v int32)`

SetNumberOfRooms sets NumberOfRooms field to given value.

### HasNumberOfRooms

`func (o *StayInfoType) HasNumberOfRooms() bool`

HasNumberOfRooms returns a boolean if a field has been set.

### GetRoomId

`func (o *StayInfoType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *StayInfoType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *StayInfoType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *StayInfoType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *StayInfoType) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *StayInfoType) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *StayInfoType) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *StayInfoType) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetRateAmount

`func (o *StayInfoType) GetRateAmount() CurrencyAmountType`

GetRateAmount returns the RateAmount field if non-nil, zero value otherwise.

### GetRateAmountOk

`func (o *StayInfoType) GetRateAmountOk() (*CurrencyAmountType, bool)`

GetRateAmountOk returns a tuple with the RateAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateAmount

`func (o *StayInfoType) SetRateAmount(v CurrencyAmountType)`

SetRateAmount sets RateAmount field to given value.

### HasRateAmount

`func (o *StayInfoType) HasRateAmount() bool`

HasRateAmount returns a boolean if a field has been set.

### GetPoints

`func (o *StayInfoType) GetPoints() PointsType`

GetPoints returns the Points field if non-nil, zero value otherwise.

### GetPointsOk

`func (o *StayInfoType) GetPointsOk() (*PointsType, bool)`

GetPointsOk returns a tuple with the Points field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPoints

`func (o *StayInfoType) SetPoints(v PointsType)`

SetPoints sets Points field to given value.

### HasPoints

`func (o *StayInfoType) HasPoints() bool`

HasPoints returns a boolean if a field has been set.

### GetRateSuppressed

`func (o *StayInfoType) GetRateSuppressed() bool`

GetRateSuppressed returns the RateSuppressed field if non-nil, zero value otherwise.

### GetRateSuppressedOk

`func (o *StayInfoType) GetRateSuppressedOk() (*bool, bool)`

GetRateSuppressedOk returns a tuple with the RateSuppressed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateSuppressed

`func (o *StayInfoType) SetRateSuppressed(v bool)`

SetRateSuppressed sets RateSuppressed field to given value.

### HasRateSuppressed

`func (o *StayInfoType) HasRateSuppressed() bool`

HasRateSuppressed returns a boolean if a field has been set.

### GetReservationBlock

`func (o *StayInfoType) GetReservationBlock() ReservationBlockType`

GetReservationBlock returns the ReservationBlock field if non-nil, zero value otherwise.

### GetReservationBlockOk

`func (o *StayInfoType) GetReservationBlockOk() (*ReservationBlockType, bool)`

GetReservationBlockOk returns a tuple with the ReservationBlock field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationBlock

`func (o *StayInfoType) SetReservationBlock(v ReservationBlockType)`

SetReservationBlock sets ReservationBlock field to given value.

### HasReservationBlock

`func (o *StayInfoType) HasReservationBlock() bool`

HasReservationBlock returns a boolean if a field has been set.

### GetBookingChannelCode

`func (o *StayInfoType) GetBookingChannelCode() string`

GetBookingChannelCode returns the BookingChannelCode field if non-nil, zero value otherwise.

### GetBookingChannelCodeOk

`func (o *StayInfoType) GetBookingChannelCodeOk() (*string, bool)`

GetBookingChannelCodeOk returns a tuple with the BookingChannelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingChannelCode

`func (o *StayInfoType) SetBookingChannelCode(v string)`

SetBookingChannelCode sets BookingChannelCode field to given value.

### HasBookingChannelCode

`func (o *StayInfoType) HasBookingChannelCode() bool`

HasBookingChannelCode returns a boolean if a field has been set.

### GetLinkCode

`func (o *StayInfoType) GetLinkCode() string`

GetLinkCode returns the LinkCode field if non-nil, zero value otherwise.

### GetLinkCodeOk

`func (o *StayInfoType) GetLinkCodeOk() (*string, bool)`

GetLinkCodeOk returns a tuple with the LinkCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinkCode

`func (o *StayInfoType) SetLinkCode(v string)`

SetLinkCode sets LinkCode field to given value.

### HasLinkCode

`func (o *StayInfoType) HasLinkCode() bool`

HasLinkCode returns a boolean if a field has been set.

### GetFixedRate

`func (o *StayInfoType) GetFixedRate() bool`

GetFixedRate returns the FixedRate field if non-nil, zero value otherwise.

### GetFixedRateOk

`func (o *StayInfoType) GetFixedRateOk() (*bool, bool)`

GetFixedRateOk returns a tuple with the FixedRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFixedRate

`func (o *StayInfoType) SetFixedRate(v bool)`

SetFixedRate sets FixedRate field to given value.

### HasFixedRate

`func (o *StayInfoType) HasFixedRate() bool`

HasFixedRate returns a boolean if a field has been set.

### GetTotalAmount

`func (o *StayInfoType) GetTotalAmount() CurrencyAmountType`

GetTotalAmount returns the TotalAmount field if non-nil, zero value otherwise.

### GetTotalAmountOk

`func (o *StayInfoType) GetTotalAmountOk() (*CurrencyAmountType, bool)`

GetTotalAmountOk returns a tuple with the TotalAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalAmount

`func (o *StayInfoType) SetTotalAmount(v CurrencyAmountType)`

SetTotalAmount sets TotalAmount field to given value.

### HasTotalAmount

`func (o *StayInfoType) HasTotalAmount() bool`

HasTotalAmount returns a boolean if a field has been set.

### GetGuarantee

`func (o *StayInfoType) GetGuarantee() ResGuaranteeType`

GetGuarantee returns the Guarantee field if non-nil, zero value otherwise.

### GetGuaranteeOk

`func (o *StayInfoType) GetGuaranteeOk() (*ResGuaranteeType, bool)`

GetGuaranteeOk returns a tuple with the Guarantee field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuarantee

`func (o *StayInfoType) SetGuarantee(v ResGuaranteeType)`

SetGuarantee sets Guarantee field to given value.

### HasGuarantee

`func (o *StayInfoType) HasGuarantee() bool`

HasGuarantee returns a boolean if a field has been set.

### GetPromotion

`func (o *StayInfoType) GetPromotion() PromotionType`

GetPromotion returns the Promotion field if non-nil, zero value otherwise.

### GetPromotionOk

`func (o *StayInfoType) GetPromotionOk() (*PromotionType, bool)`

GetPromotionOk returns a tuple with the Promotion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromotion

`func (o *StayInfoType) SetPromotion(v PromotionType)`

SetPromotion sets Promotion field to given value.

### HasPromotion

`func (o *StayInfoType) HasPromotion() bool`

HasPromotion returns a boolean if a field has been set.

### GetMarketCode

`func (o *StayInfoType) GetMarketCode() string`

GetMarketCode returns the MarketCode field if non-nil, zero value otherwise.

### GetMarketCodeOk

`func (o *StayInfoType) GetMarketCodeOk() (*string, bool)`

GetMarketCodeOk returns a tuple with the MarketCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketCode

`func (o *StayInfoType) SetMarketCode(v string)`

SetMarketCode sets MarketCode field to given value.

### HasMarketCode

`func (o *StayInfoType) HasMarketCode() bool`

HasMarketCode returns a boolean if a field has been set.

### GetMarketDescription

`func (o *StayInfoType) GetMarketDescription() string`

GetMarketDescription returns the MarketDescription field if non-nil, zero value otherwise.

### GetMarketDescriptionOk

`func (o *StayInfoType) GetMarketDescriptionOk() (*string, bool)`

GetMarketDescriptionOk returns a tuple with the MarketDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketDescription

`func (o *StayInfoType) SetMarketDescription(v string)`

SetMarketDescription sets MarketDescription field to given value.

### HasMarketDescription

`func (o *StayInfoType) HasMarketDescription() bool`

HasMarketDescription returns a boolean if a field has been set.

### GetSourceCode

`func (o *StayInfoType) GetSourceCode() string`

GetSourceCode returns the SourceCode field if non-nil, zero value otherwise.

### GetSourceCodeOk

`func (o *StayInfoType) GetSourceCodeOk() (*string, bool)`

GetSourceCodeOk returns a tuple with the SourceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceCode

`func (o *StayInfoType) SetSourceCode(v string)`

SetSourceCode sets SourceCode field to given value.

### HasSourceCode

`func (o *StayInfoType) HasSourceCode() bool`

HasSourceCode returns a boolean if a field has been set.

### GetSourceCodeDescription

`func (o *StayInfoType) GetSourceCodeDescription() string`

GetSourceCodeDescription returns the SourceCodeDescription field if non-nil, zero value otherwise.

### GetSourceCodeDescriptionOk

`func (o *StayInfoType) GetSourceCodeDescriptionOk() (*string, bool)`

GetSourceCodeDescriptionOk returns a tuple with the SourceCodeDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceCodeDescription

`func (o *StayInfoType) SetSourceCodeDescription(v string)`

SetSourceCodeDescription sets SourceCodeDescription field to given value.

### HasSourceCodeDescription

`func (o *StayInfoType) HasSourceCodeDescription() bool`

HasSourceCodeDescription returns a boolean if a field has been set.

### GetBalance

`func (o *StayInfoType) GetBalance() CurrencyAmountType`

GetBalance returns the Balance field if non-nil, zero value otherwise.

### GetBalanceOk

`func (o *StayInfoType) GetBalanceOk() (*CurrencyAmountType, bool)`

GetBalanceOk returns a tuple with the Balance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBalance

`func (o *StayInfoType) SetBalance(v CurrencyAmountType)`

SetBalance sets Balance field to given value.

### HasBalance

`func (o *StayInfoType) HasBalance() bool`

HasBalance returns a boolean if a field has been set.

### GetCompBalance

`func (o *StayInfoType) GetCompBalance() CurrencyAmountType`

GetCompBalance returns the CompBalance field if non-nil, zero value otherwise.

### GetCompBalanceOk

`func (o *StayInfoType) GetCompBalanceOk() (*CurrencyAmountType, bool)`

GetCompBalanceOk returns a tuple with the CompBalance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompBalance

`func (o *StayInfoType) SetCompBalance(v CurrencyAmountType)`

SetCompBalance sets CompBalance field to given value.

### HasCompBalance

`func (o *StayInfoType) HasCompBalance() bool`

HasCompBalance returns a boolean if a field has been set.

### GetRoomTypeCharged

`func (o *StayInfoType) GetRoomTypeCharged() string`

GetRoomTypeCharged returns the RoomTypeCharged field if non-nil, zero value otherwise.

### GetRoomTypeChargedOk

`func (o *StayInfoType) GetRoomTypeChargedOk() (*string, bool)`

GetRoomTypeChargedOk returns a tuple with the RoomTypeCharged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypeCharged

`func (o *StayInfoType) SetRoomTypeCharged(v string)`

SetRoomTypeCharged sets RoomTypeCharged field to given value.

### HasRoomTypeCharged

`func (o *StayInfoType) HasRoomTypeCharged() bool`

HasRoomTypeCharged returns a boolean if a field has been set.

### GetDepositPayments

`func (o *StayInfoType) GetDepositPayments() CurrencyAmountType`

GetDepositPayments returns the DepositPayments field if non-nil, zero value otherwise.

### GetDepositPaymentsOk

`func (o *StayInfoType) GetDepositPaymentsOk() (*CurrencyAmountType, bool)`

GetDepositPaymentsOk returns a tuple with the DepositPayments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepositPayments

`func (o *StayInfoType) SetDepositPayments(v CurrencyAmountType)`

SetDepositPayments sets DepositPayments field to given value.

### HasDepositPayments

`func (o *StayInfoType) HasDepositPayments() bool`

HasDepositPayments returns a boolean if a field has been set.

### GetGuestServiceStatus

`func (o *StayInfoType) GetGuestServiceStatus() GuestHousekeepingServiceRequestType`

GetGuestServiceStatus returns the GuestServiceStatus field if non-nil, zero value otherwise.

### GetGuestServiceStatusOk

`func (o *StayInfoType) GetGuestServiceStatusOk() (*GuestHousekeepingServiceRequestType, bool)`

GetGuestServiceStatusOk returns a tuple with the GuestServiceStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestServiceStatus

`func (o *StayInfoType) SetGuestServiceStatus(v GuestHousekeepingServiceRequestType)`

SetGuestServiceStatus sets GuestServiceStatus field to given value.

### HasGuestServiceStatus

`func (o *StayInfoType) HasGuestServiceStatus() bool`

HasGuestServiceStatus returns a boolean if a field has been set.

### GetScheduledCheckoutTime

`func (o *StayInfoType) GetScheduledCheckoutTime() string`

GetScheduledCheckoutTime returns the ScheduledCheckoutTime field if non-nil, zero value otherwise.

### GetScheduledCheckoutTimeOk

`func (o *StayInfoType) GetScheduledCheckoutTimeOk() (*string, bool)`

GetScheduledCheckoutTimeOk returns a tuple with the ScheduledCheckoutTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduledCheckoutTime

`func (o *StayInfoType) SetScheduledCheckoutTime(v string)`

SetScheduledCheckoutTime sets ScheduledCheckoutTime field to given value.

### HasScheduledCheckoutTime

`func (o *StayInfoType) HasScheduledCheckoutTime() bool`

HasScheduledCheckoutTime returns a boolean if a field has been set.

### GetRoomNumberLocked

`func (o *StayInfoType) GetRoomNumberLocked() bool`

GetRoomNumberLocked returns the RoomNumberLocked field if non-nil, zero value otherwise.

### GetRoomNumberLockedOk

`func (o *StayInfoType) GetRoomNumberLockedOk() (*bool, bool)`

GetRoomNumberLockedOk returns a tuple with the RoomNumberLocked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomNumberLocked

`func (o *StayInfoType) SetRoomNumberLocked(v bool)`

SetRoomNumberLocked sets RoomNumberLocked field to given value.

### HasRoomNumberLocked

`func (o *StayInfoType) HasRoomNumberLocked() bool`

HasRoomNumberLocked returns a boolean if a field has been set.

### GetPseudoRoom

`func (o *StayInfoType) GetPseudoRoom() bool`

GetPseudoRoom returns the PseudoRoom field if non-nil, zero value otherwise.

### GetPseudoRoomOk

`func (o *StayInfoType) GetPseudoRoomOk() (*bool, bool)`

GetPseudoRoomOk returns a tuple with the PseudoRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPseudoRoom

`func (o *StayInfoType) SetPseudoRoom(v bool)`

SetPseudoRoom sets PseudoRoom field to given value.

### HasPseudoRoom

`func (o *StayInfoType) HasPseudoRoom() bool`

HasPseudoRoom returns a boolean if a field has been set.

### GetAssignedByAI

`func (o *StayInfoType) GetAssignedByAI() bool`

GetAssignedByAI returns the AssignedByAI field if non-nil, zero value otherwise.

### GetAssignedByAIOk

`func (o *StayInfoType) GetAssignedByAIOk() (*bool, bool)`

GetAssignedByAIOk returns a tuple with the AssignedByAI field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssignedByAI

`func (o *StayInfoType) SetAssignedByAI(v bool)`

SetAssignedByAI sets AssignedByAI field to given value.

### HasAssignedByAI

`func (o *StayInfoType) HasAssignedByAI() bool`

HasAssignedByAI returns a boolean if a field has been set.

### GetUpgradedByAI

`func (o *StayInfoType) GetUpgradedByAI() bool`

GetUpgradedByAI returns the UpgradedByAI field if non-nil, zero value otherwise.

### GetUpgradedByAIOk

`func (o *StayInfoType) GetUpgradedByAIOk() (*bool, bool)`

GetUpgradedByAIOk returns a tuple with the UpgradedByAI field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpgradedByAI

`func (o *StayInfoType) SetUpgradedByAI(v bool)`

SetUpgradedByAI sets UpgradedByAI field to given value.

### HasUpgradedByAI

`func (o *StayInfoType) HasUpgradedByAI() bool`

HasUpgradedByAI returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


