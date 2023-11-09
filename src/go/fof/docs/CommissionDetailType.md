# CommissionDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AROffset** | Pointer to **bool** | When set to true, commission for this reservation is flagged to offset AR. | [optional] 
**AROffsetAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**AdjustmentNotes** | Pointer to **string** | System generated logs to indicate changes of commission record. | [optional] 
**BlockCode** | Pointer to **string** | Block code of the reservation. | [optional] 
**CommissionAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**CommissionCode** | Pointer to [**CommissionCodeType**](CommissionCodeType.md) |  | [optional] 
**CommissionId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**CommissionRevenue** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**CommissionRevenueTaxAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**CommissionStatus** | Pointer to [**CommissionStatusType**](CommissionStatusType.md) |  | [optional] 
**CommissionTaxAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**ExchangeRate** | Pointer to **float32** | Exchange rate of the currency. | [optional] 
**GuestInfo** | Pointer to [**ResGuestInfoType**](ResGuestInfoType.md) |  | [optional] 
**HoldReason** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**OnHold** | Pointer to **bool** | When set to true, commission for this reservation is flagged as on hold. | [optional] 
**Prepaid** | Pointer to **bool** | When set to true, commission for this reservation is flagged as prepaid. | [optional] 
**PrepaidCommissionAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**RateAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**RateCode** | Pointer to **string** | Rate code of the reservation | [optional] 
**RecordLocator** | Pointer to **string** | TA Record locator | [optional] 
**Remarks** | Pointer to **string** | Remarks for the commission record. | [optional] 
**ReservationIdList** | Pointer to [**ReservationIdList**](ReservationIdList.md) |  | [optional] 
**ReservationStatus** | Pointer to **string** | Reservation status. | [optional] 
**RoomId** | Pointer to **string** | Room number assigned to the reservation | [optional] 
**RoomType** | Pointer to **string** | Room type code of the reservation. | [optional] 
**Routing** | Pointer to **bool** | When set to true, commission for this reservation is flagged as routing. | [optional] 
**TimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**TotalCommission** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 

## Methods

### NewCommissionDetailType

`func NewCommissionDetailType() *CommissionDetailType`

NewCommissionDetailType instantiates a new CommissionDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommissionDetailTypeWithDefaults

`func NewCommissionDetailTypeWithDefaults() *CommissionDetailType`

NewCommissionDetailTypeWithDefaults instantiates a new CommissionDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAROffset

`func (o *CommissionDetailType) GetAROffset() bool`

GetAROffset returns the AROffset field if non-nil, zero value otherwise.

### GetAROffsetOk

`func (o *CommissionDetailType) GetAROffsetOk() (*bool, bool)`

GetAROffsetOk returns a tuple with the AROffset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAROffset

`func (o *CommissionDetailType) SetAROffset(v bool)`

SetAROffset sets AROffset field to given value.

### HasAROffset

`func (o *CommissionDetailType) HasAROffset() bool`

HasAROffset returns a boolean if a field has been set.

### GetAROffsetAmount

`func (o *CommissionDetailType) GetAROffsetAmount() CurrencyAmountType`

GetAROffsetAmount returns the AROffsetAmount field if non-nil, zero value otherwise.

### GetAROffsetAmountOk

`func (o *CommissionDetailType) GetAROffsetAmountOk() (*CurrencyAmountType, bool)`

GetAROffsetAmountOk returns a tuple with the AROffsetAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAROffsetAmount

`func (o *CommissionDetailType) SetAROffsetAmount(v CurrencyAmountType)`

SetAROffsetAmount sets AROffsetAmount field to given value.

### HasAROffsetAmount

`func (o *CommissionDetailType) HasAROffsetAmount() bool`

HasAROffsetAmount returns a boolean if a field has been set.

### GetAdjustmentNotes

`func (o *CommissionDetailType) GetAdjustmentNotes() string`

GetAdjustmentNotes returns the AdjustmentNotes field if non-nil, zero value otherwise.

### GetAdjustmentNotesOk

`func (o *CommissionDetailType) GetAdjustmentNotesOk() (*string, bool)`

GetAdjustmentNotesOk returns a tuple with the AdjustmentNotes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdjustmentNotes

`func (o *CommissionDetailType) SetAdjustmentNotes(v string)`

SetAdjustmentNotes sets AdjustmentNotes field to given value.

### HasAdjustmentNotes

`func (o *CommissionDetailType) HasAdjustmentNotes() bool`

HasAdjustmentNotes returns a boolean if a field has been set.

### GetBlockCode

`func (o *CommissionDetailType) GetBlockCode() string`

GetBlockCode returns the BlockCode field if non-nil, zero value otherwise.

### GetBlockCodeOk

`func (o *CommissionDetailType) GetBlockCodeOk() (*string, bool)`

GetBlockCodeOk returns a tuple with the BlockCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockCode

`func (o *CommissionDetailType) SetBlockCode(v string)`

SetBlockCode sets BlockCode field to given value.

### HasBlockCode

`func (o *CommissionDetailType) HasBlockCode() bool`

HasBlockCode returns a boolean if a field has been set.

### GetCommissionAmount

`func (o *CommissionDetailType) GetCommissionAmount() CurrencyAmountType`

GetCommissionAmount returns the CommissionAmount field if non-nil, zero value otherwise.

### GetCommissionAmountOk

`func (o *CommissionDetailType) GetCommissionAmountOk() (*CurrencyAmountType, bool)`

GetCommissionAmountOk returns a tuple with the CommissionAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionAmount

`func (o *CommissionDetailType) SetCommissionAmount(v CurrencyAmountType)`

SetCommissionAmount sets CommissionAmount field to given value.

### HasCommissionAmount

`func (o *CommissionDetailType) HasCommissionAmount() bool`

HasCommissionAmount returns a boolean if a field has been set.

### GetCommissionCode

`func (o *CommissionDetailType) GetCommissionCode() CommissionCodeType`

GetCommissionCode returns the CommissionCode field if non-nil, zero value otherwise.

### GetCommissionCodeOk

`func (o *CommissionDetailType) GetCommissionCodeOk() (*CommissionCodeType, bool)`

GetCommissionCodeOk returns a tuple with the CommissionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionCode

`func (o *CommissionDetailType) SetCommissionCode(v CommissionCodeType)`

SetCommissionCode sets CommissionCode field to given value.

### HasCommissionCode

`func (o *CommissionDetailType) HasCommissionCode() bool`

HasCommissionCode returns a boolean if a field has been set.

### GetCommissionId

`func (o *CommissionDetailType) GetCommissionId() UniqueIDType`

GetCommissionId returns the CommissionId field if non-nil, zero value otherwise.

### GetCommissionIdOk

`func (o *CommissionDetailType) GetCommissionIdOk() (*UniqueIDType, bool)`

GetCommissionIdOk returns a tuple with the CommissionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionId

`func (o *CommissionDetailType) SetCommissionId(v UniqueIDType)`

SetCommissionId sets CommissionId field to given value.

### HasCommissionId

`func (o *CommissionDetailType) HasCommissionId() bool`

HasCommissionId returns a boolean if a field has been set.

### GetCommissionRevenue

`func (o *CommissionDetailType) GetCommissionRevenue() CurrencyAmountType`

GetCommissionRevenue returns the CommissionRevenue field if non-nil, zero value otherwise.

### GetCommissionRevenueOk

`func (o *CommissionDetailType) GetCommissionRevenueOk() (*CurrencyAmountType, bool)`

GetCommissionRevenueOk returns a tuple with the CommissionRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionRevenue

`func (o *CommissionDetailType) SetCommissionRevenue(v CurrencyAmountType)`

SetCommissionRevenue sets CommissionRevenue field to given value.

### HasCommissionRevenue

`func (o *CommissionDetailType) HasCommissionRevenue() bool`

HasCommissionRevenue returns a boolean if a field has been set.

### GetCommissionRevenueTaxAmount

`func (o *CommissionDetailType) GetCommissionRevenueTaxAmount() CurrencyAmountType`

GetCommissionRevenueTaxAmount returns the CommissionRevenueTaxAmount field if non-nil, zero value otherwise.

### GetCommissionRevenueTaxAmountOk

`func (o *CommissionDetailType) GetCommissionRevenueTaxAmountOk() (*CurrencyAmountType, bool)`

GetCommissionRevenueTaxAmountOk returns a tuple with the CommissionRevenueTaxAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionRevenueTaxAmount

`func (o *CommissionDetailType) SetCommissionRevenueTaxAmount(v CurrencyAmountType)`

SetCommissionRevenueTaxAmount sets CommissionRevenueTaxAmount field to given value.

### HasCommissionRevenueTaxAmount

`func (o *CommissionDetailType) HasCommissionRevenueTaxAmount() bool`

HasCommissionRevenueTaxAmount returns a boolean if a field has been set.

### GetCommissionStatus

`func (o *CommissionDetailType) GetCommissionStatus() CommissionStatusType`

GetCommissionStatus returns the CommissionStatus field if non-nil, zero value otherwise.

### GetCommissionStatusOk

`func (o *CommissionDetailType) GetCommissionStatusOk() (*CommissionStatusType, bool)`

GetCommissionStatusOk returns a tuple with the CommissionStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionStatus

`func (o *CommissionDetailType) SetCommissionStatus(v CommissionStatusType)`

SetCommissionStatus sets CommissionStatus field to given value.

### HasCommissionStatus

`func (o *CommissionDetailType) HasCommissionStatus() bool`

HasCommissionStatus returns a boolean if a field has been set.

### GetCommissionTaxAmount

`func (o *CommissionDetailType) GetCommissionTaxAmount() CurrencyAmountType`

GetCommissionTaxAmount returns the CommissionTaxAmount field if non-nil, zero value otherwise.

### GetCommissionTaxAmountOk

`func (o *CommissionDetailType) GetCommissionTaxAmountOk() (*CurrencyAmountType, bool)`

GetCommissionTaxAmountOk returns a tuple with the CommissionTaxAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionTaxAmount

`func (o *CommissionDetailType) SetCommissionTaxAmount(v CurrencyAmountType)`

SetCommissionTaxAmount sets CommissionTaxAmount field to given value.

### HasCommissionTaxAmount

`func (o *CommissionDetailType) HasCommissionTaxAmount() bool`

HasCommissionTaxAmount returns a boolean if a field has been set.

### GetExchangeRate

`func (o *CommissionDetailType) GetExchangeRate() float32`

GetExchangeRate returns the ExchangeRate field if non-nil, zero value otherwise.

### GetExchangeRateOk

`func (o *CommissionDetailType) GetExchangeRateOk() (*float32, bool)`

GetExchangeRateOk returns a tuple with the ExchangeRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExchangeRate

`func (o *CommissionDetailType) SetExchangeRate(v float32)`

SetExchangeRate sets ExchangeRate field to given value.

### HasExchangeRate

`func (o *CommissionDetailType) HasExchangeRate() bool`

HasExchangeRate returns a boolean if a field has been set.

### GetGuestInfo

`func (o *CommissionDetailType) GetGuestInfo() ResGuestInfoType`

GetGuestInfo returns the GuestInfo field if non-nil, zero value otherwise.

### GetGuestInfoOk

`func (o *CommissionDetailType) GetGuestInfoOk() (*ResGuestInfoType, bool)`

GetGuestInfoOk returns a tuple with the GuestInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestInfo

`func (o *CommissionDetailType) SetGuestInfo(v ResGuestInfoType)`

SetGuestInfo sets GuestInfo field to given value.

### HasGuestInfo

`func (o *CommissionDetailType) HasGuestInfo() bool`

HasGuestInfo returns a boolean if a field has been set.

### GetHoldReason

`func (o *CommissionDetailType) GetHoldReason() CodeDescriptionType`

GetHoldReason returns the HoldReason field if non-nil, zero value otherwise.

### GetHoldReasonOk

`func (o *CommissionDetailType) GetHoldReasonOk() (*CodeDescriptionType, bool)`

GetHoldReasonOk returns a tuple with the HoldReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHoldReason

`func (o *CommissionDetailType) SetHoldReason(v CodeDescriptionType)`

SetHoldReason sets HoldReason field to given value.

### HasHoldReason

`func (o *CommissionDetailType) HasHoldReason() bool`

HasHoldReason returns a boolean if a field has been set.

### GetOnHold

`func (o *CommissionDetailType) GetOnHold() bool`

GetOnHold returns the OnHold field if non-nil, zero value otherwise.

### GetOnHoldOk

`func (o *CommissionDetailType) GetOnHoldOk() (*bool, bool)`

GetOnHoldOk returns a tuple with the OnHold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOnHold

`func (o *CommissionDetailType) SetOnHold(v bool)`

SetOnHold sets OnHold field to given value.

### HasOnHold

`func (o *CommissionDetailType) HasOnHold() bool`

HasOnHold returns a boolean if a field has been set.

### GetPrepaid

`func (o *CommissionDetailType) GetPrepaid() bool`

GetPrepaid returns the Prepaid field if non-nil, zero value otherwise.

### GetPrepaidOk

`func (o *CommissionDetailType) GetPrepaidOk() (*bool, bool)`

GetPrepaidOk returns a tuple with the Prepaid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrepaid

`func (o *CommissionDetailType) SetPrepaid(v bool)`

SetPrepaid sets Prepaid field to given value.

### HasPrepaid

`func (o *CommissionDetailType) HasPrepaid() bool`

HasPrepaid returns a boolean if a field has been set.

### GetPrepaidCommissionAmount

`func (o *CommissionDetailType) GetPrepaidCommissionAmount() CurrencyAmountType`

GetPrepaidCommissionAmount returns the PrepaidCommissionAmount field if non-nil, zero value otherwise.

### GetPrepaidCommissionAmountOk

`func (o *CommissionDetailType) GetPrepaidCommissionAmountOk() (*CurrencyAmountType, bool)`

GetPrepaidCommissionAmountOk returns a tuple with the PrepaidCommissionAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrepaidCommissionAmount

`func (o *CommissionDetailType) SetPrepaidCommissionAmount(v CurrencyAmountType)`

SetPrepaidCommissionAmount sets PrepaidCommissionAmount field to given value.

### HasPrepaidCommissionAmount

`func (o *CommissionDetailType) HasPrepaidCommissionAmount() bool`

HasPrepaidCommissionAmount returns a boolean if a field has been set.

### GetRateAmount

`func (o *CommissionDetailType) GetRateAmount() CurrencyAmountType`

GetRateAmount returns the RateAmount field if non-nil, zero value otherwise.

### GetRateAmountOk

`func (o *CommissionDetailType) GetRateAmountOk() (*CurrencyAmountType, bool)`

GetRateAmountOk returns a tuple with the RateAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateAmount

`func (o *CommissionDetailType) SetRateAmount(v CurrencyAmountType)`

SetRateAmount sets RateAmount field to given value.

### HasRateAmount

`func (o *CommissionDetailType) HasRateAmount() bool`

HasRateAmount returns a boolean if a field has been set.

### GetRateCode

`func (o *CommissionDetailType) GetRateCode() string`

GetRateCode returns the RateCode field if non-nil, zero value otherwise.

### GetRateCodeOk

`func (o *CommissionDetailType) GetRateCodeOk() (*string, bool)`

GetRateCodeOk returns a tuple with the RateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCode

`func (o *CommissionDetailType) SetRateCode(v string)`

SetRateCode sets RateCode field to given value.

### HasRateCode

`func (o *CommissionDetailType) HasRateCode() bool`

HasRateCode returns a boolean if a field has been set.

### GetRecordLocator

`func (o *CommissionDetailType) GetRecordLocator() string`

GetRecordLocator returns the RecordLocator field if non-nil, zero value otherwise.

### GetRecordLocatorOk

`func (o *CommissionDetailType) GetRecordLocatorOk() (*string, bool)`

GetRecordLocatorOk returns a tuple with the RecordLocator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecordLocator

`func (o *CommissionDetailType) SetRecordLocator(v string)`

SetRecordLocator sets RecordLocator field to given value.

### HasRecordLocator

`func (o *CommissionDetailType) HasRecordLocator() bool`

HasRecordLocator returns a boolean if a field has been set.

### GetRemarks

`func (o *CommissionDetailType) GetRemarks() string`

GetRemarks returns the Remarks field if non-nil, zero value otherwise.

### GetRemarksOk

`func (o *CommissionDetailType) GetRemarksOk() (*string, bool)`

GetRemarksOk returns a tuple with the Remarks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemarks

`func (o *CommissionDetailType) SetRemarks(v string)`

SetRemarks sets Remarks field to given value.

### HasRemarks

`func (o *CommissionDetailType) HasRemarks() bool`

HasRemarks returns a boolean if a field has been set.

### GetReservationIdList

`func (o *CommissionDetailType) GetReservationIdList() ReservationIdList`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *CommissionDetailType) GetReservationIdListOk() (*ReservationIdList, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *CommissionDetailType) SetReservationIdList(v ReservationIdList)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *CommissionDetailType) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetReservationStatus

`func (o *CommissionDetailType) GetReservationStatus() string`

GetReservationStatus returns the ReservationStatus field if non-nil, zero value otherwise.

### GetReservationStatusOk

`func (o *CommissionDetailType) GetReservationStatusOk() (*string, bool)`

GetReservationStatusOk returns a tuple with the ReservationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationStatus

`func (o *CommissionDetailType) SetReservationStatus(v string)`

SetReservationStatus sets ReservationStatus field to given value.

### HasReservationStatus

`func (o *CommissionDetailType) HasReservationStatus() bool`

HasReservationStatus returns a boolean if a field has been set.

### GetRoomId

`func (o *CommissionDetailType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *CommissionDetailType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *CommissionDetailType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *CommissionDetailType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetRoomType

`func (o *CommissionDetailType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *CommissionDetailType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *CommissionDetailType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *CommissionDetailType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetRouting

`func (o *CommissionDetailType) GetRouting() bool`

GetRouting returns the Routing field if non-nil, zero value otherwise.

### GetRoutingOk

`func (o *CommissionDetailType) GetRoutingOk() (*bool, bool)`

GetRoutingOk returns a tuple with the Routing field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRouting

`func (o *CommissionDetailType) SetRouting(v bool)`

SetRouting sets Routing field to given value.

### HasRouting

`func (o *CommissionDetailType) HasRouting() bool`

HasRouting returns a boolean if a field has been set.

### GetTimeSpan

`func (o *CommissionDetailType) GetTimeSpan() TimeSpanType`

GetTimeSpan returns the TimeSpan field if non-nil, zero value otherwise.

### GetTimeSpanOk

`func (o *CommissionDetailType) GetTimeSpanOk() (*TimeSpanType, bool)`

GetTimeSpanOk returns a tuple with the TimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeSpan

`func (o *CommissionDetailType) SetTimeSpan(v TimeSpanType)`

SetTimeSpan sets TimeSpan field to given value.

### HasTimeSpan

`func (o *CommissionDetailType) HasTimeSpan() bool`

HasTimeSpan returns a boolean if a field has been set.

### GetTotalCommission

`func (o *CommissionDetailType) GetTotalCommission() CurrencyAmountType`

GetTotalCommission returns the TotalCommission field if non-nil, zero value otherwise.

### GetTotalCommissionOk

`func (o *CommissionDetailType) GetTotalCommissionOk() (*CurrencyAmountType, bool)`

GetTotalCommissionOk returns a tuple with the TotalCommission field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCommission

`func (o *CommissionDetailType) SetTotalCommission(v CurrencyAmountType)`

SetTotalCommission sets TotalCommission field to given value.

### HasTotalCommission

`func (o *CommissionDetailType) HasTotalCommission() bool`

HasTotalCommission returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


