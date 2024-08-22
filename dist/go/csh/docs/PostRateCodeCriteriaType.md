# PostRateCodeCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdjustmentCode** | Pointer to **string** | Adjustment code to be used for the manual posting of rate code. | [optional] 
**ArrangementCode** | Pointer to **string** | Corrected arrangement code from the package associated to this transaction. | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**CheckNo** | Pointer to **string** | Check number for the posting. | [optional] 
**FolioWindowNo** | Pointer to **int32** |  | [optional] 
**GuestCounts** | Pointer to [**GuestCountsType**](GuestCountsType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Hotel context for the Reservation. | [optional] 
**Nights** | Pointer to **int32** | Number of nights to post the Rate Code for. Used for Comp Accounting. | [optional] 
**ParentTrxNo** | Pointer to **float32** | The linked transaction number for this Posting of Rate Code. | [optional] 
**PostProducts** | Pointer to **bool** | Flag to indicate if Products(Packages) which are part of the Rate Code should be posted as part of this operation. If products are not required, the entire amount will be posted towards the room element of the Rate Code. | [optional] 
**Price** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Quantity** | Pointer to **int32** | Posting quantity. | [optional] 
**RateCode** | Pointer to **string** | The Rate Code which is to be posted on the Guest Folio. | [optional] 
**Reference** | Pointer to **string** | User-defined posting reference. | [optional] 
**Remark** | Pointer to **string** | Posting remarks. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**RevenueDate** | Pointer to **string** | Revenue Date or the business date of the posting. | [optional] 

## Methods

### NewPostRateCodeCriteriaType

`func NewPostRateCodeCriteriaType() *PostRateCodeCriteriaType`

NewPostRateCodeCriteriaType instantiates a new PostRateCodeCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostRateCodeCriteriaTypeWithDefaults

`func NewPostRateCodeCriteriaTypeWithDefaults() *PostRateCodeCriteriaType`

NewPostRateCodeCriteriaTypeWithDefaults instantiates a new PostRateCodeCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdjustmentCode

`func (o *PostRateCodeCriteriaType) GetAdjustmentCode() string`

GetAdjustmentCode returns the AdjustmentCode field if non-nil, zero value otherwise.

### GetAdjustmentCodeOk

`func (o *PostRateCodeCriteriaType) GetAdjustmentCodeOk() (*string, bool)`

GetAdjustmentCodeOk returns a tuple with the AdjustmentCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdjustmentCode

`func (o *PostRateCodeCriteriaType) SetAdjustmentCode(v string)`

SetAdjustmentCode sets AdjustmentCode field to given value.

### HasAdjustmentCode

`func (o *PostRateCodeCriteriaType) HasAdjustmentCode() bool`

HasAdjustmentCode returns a boolean if a field has been set.

### GetArrangementCode

`func (o *PostRateCodeCriteriaType) GetArrangementCode() string`

GetArrangementCode returns the ArrangementCode field if non-nil, zero value otherwise.

### GetArrangementCodeOk

`func (o *PostRateCodeCriteriaType) GetArrangementCodeOk() (*string, bool)`

GetArrangementCodeOk returns a tuple with the ArrangementCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrangementCode

`func (o *PostRateCodeCriteriaType) SetArrangementCode(v string)`

SetArrangementCode sets ArrangementCode field to given value.

### HasArrangementCode

`func (o *PostRateCodeCriteriaType) HasArrangementCode() bool`

HasArrangementCode returns a boolean if a field has been set.

### GetCashierId

`func (o *PostRateCodeCriteriaType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *PostRateCodeCriteriaType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *PostRateCodeCriteriaType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *PostRateCodeCriteriaType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetCheckNo

`func (o *PostRateCodeCriteriaType) GetCheckNo() string`

GetCheckNo returns the CheckNo field if non-nil, zero value otherwise.

### GetCheckNoOk

`func (o *PostRateCodeCriteriaType) GetCheckNoOk() (*string, bool)`

GetCheckNoOk returns a tuple with the CheckNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckNo

`func (o *PostRateCodeCriteriaType) SetCheckNo(v string)`

SetCheckNo sets CheckNo field to given value.

### HasCheckNo

`func (o *PostRateCodeCriteriaType) HasCheckNo() bool`

HasCheckNo returns a boolean if a field has been set.

### GetFolioWindowNo

`func (o *PostRateCodeCriteriaType) GetFolioWindowNo() int32`

GetFolioWindowNo returns the FolioWindowNo field if non-nil, zero value otherwise.

### GetFolioWindowNoOk

`func (o *PostRateCodeCriteriaType) GetFolioWindowNoOk() (*int32, bool)`

GetFolioWindowNoOk returns a tuple with the FolioWindowNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioWindowNo

`func (o *PostRateCodeCriteriaType) SetFolioWindowNo(v int32)`

SetFolioWindowNo sets FolioWindowNo field to given value.

### HasFolioWindowNo

`func (o *PostRateCodeCriteriaType) HasFolioWindowNo() bool`

HasFolioWindowNo returns a boolean if a field has been set.

### GetGuestCounts

`func (o *PostRateCodeCriteriaType) GetGuestCounts() GuestCountsType`

GetGuestCounts returns the GuestCounts field if non-nil, zero value otherwise.

### GetGuestCountsOk

`func (o *PostRateCodeCriteriaType) GetGuestCountsOk() (*GuestCountsType, bool)`

GetGuestCountsOk returns a tuple with the GuestCounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestCounts

`func (o *PostRateCodeCriteriaType) SetGuestCounts(v GuestCountsType)`

SetGuestCounts sets GuestCounts field to given value.

### HasGuestCounts

`func (o *PostRateCodeCriteriaType) HasGuestCounts() bool`

HasGuestCounts returns a boolean if a field has been set.

### GetHotelId

`func (o *PostRateCodeCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PostRateCodeCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PostRateCodeCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PostRateCodeCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetNights

`func (o *PostRateCodeCriteriaType) GetNights() int32`

GetNights returns the Nights field if non-nil, zero value otherwise.

### GetNightsOk

`func (o *PostRateCodeCriteriaType) GetNightsOk() (*int32, bool)`

GetNightsOk returns a tuple with the Nights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNights

`func (o *PostRateCodeCriteriaType) SetNights(v int32)`

SetNights sets Nights field to given value.

### HasNights

`func (o *PostRateCodeCriteriaType) HasNights() bool`

HasNights returns a boolean if a field has been set.

### GetParentTrxNo

`func (o *PostRateCodeCriteriaType) GetParentTrxNo() float32`

GetParentTrxNo returns the ParentTrxNo field if non-nil, zero value otherwise.

### GetParentTrxNoOk

`func (o *PostRateCodeCriteriaType) GetParentTrxNoOk() (*float32, bool)`

GetParentTrxNoOk returns a tuple with the ParentTrxNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentTrxNo

`func (o *PostRateCodeCriteriaType) SetParentTrxNo(v float32)`

SetParentTrxNo sets ParentTrxNo field to given value.

### HasParentTrxNo

`func (o *PostRateCodeCriteriaType) HasParentTrxNo() bool`

HasParentTrxNo returns a boolean if a field has been set.

### GetPostProducts

`func (o *PostRateCodeCriteriaType) GetPostProducts() bool`

GetPostProducts returns the PostProducts field if non-nil, zero value otherwise.

### GetPostProductsOk

`func (o *PostRateCodeCriteriaType) GetPostProductsOk() (*bool, bool)`

GetPostProductsOk returns a tuple with the PostProducts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostProducts

`func (o *PostRateCodeCriteriaType) SetPostProducts(v bool)`

SetPostProducts sets PostProducts field to given value.

### HasPostProducts

`func (o *PostRateCodeCriteriaType) HasPostProducts() bool`

HasPostProducts returns a boolean if a field has been set.

### GetPrice

`func (o *PostRateCodeCriteriaType) GetPrice() CurrencyAmountType`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *PostRateCodeCriteriaType) GetPriceOk() (*CurrencyAmountType, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *PostRateCodeCriteriaType) SetPrice(v CurrencyAmountType)`

SetPrice sets Price field to given value.

### HasPrice

`func (o *PostRateCodeCriteriaType) HasPrice() bool`

HasPrice returns a boolean if a field has been set.

### GetQuantity

`func (o *PostRateCodeCriteriaType) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *PostRateCodeCriteriaType) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *PostRateCodeCriteriaType) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.

### HasQuantity

`func (o *PostRateCodeCriteriaType) HasQuantity() bool`

HasQuantity returns a boolean if a field has been set.

### GetRateCode

`func (o *PostRateCodeCriteriaType) GetRateCode() string`

GetRateCode returns the RateCode field if non-nil, zero value otherwise.

### GetRateCodeOk

`func (o *PostRateCodeCriteriaType) GetRateCodeOk() (*string, bool)`

GetRateCodeOk returns a tuple with the RateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCode

`func (o *PostRateCodeCriteriaType) SetRateCode(v string)`

SetRateCode sets RateCode field to given value.

### HasRateCode

`func (o *PostRateCodeCriteriaType) HasRateCode() bool`

HasRateCode returns a boolean if a field has been set.

### GetReference

`func (o *PostRateCodeCriteriaType) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *PostRateCodeCriteriaType) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *PostRateCodeCriteriaType) SetReference(v string)`

SetReference sets Reference field to given value.

### HasReference

`func (o *PostRateCodeCriteriaType) HasReference() bool`

HasReference returns a boolean if a field has been set.

### GetRemark

`func (o *PostRateCodeCriteriaType) GetRemark() string`

GetRemark returns the Remark field if non-nil, zero value otherwise.

### GetRemarkOk

`func (o *PostRateCodeCriteriaType) GetRemarkOk() (*string, bool)`

GetRemarkOk returns a tuple with the Remark field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemark

`func (o *PostRateCodeCriteriaType) SetRemark(v string)`

SetRemark sets Remark field to given value.

### HasRemark

`func (o *PostRateCodeCriteriaType) HasRemark() bool`

HasRemark returns a boolean if a field has been set.

### GetReservationId

`func (o *PostRateCodeCriteriaType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *PostRateCodeCriteriaType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *PostRateCodeCriteriaType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *PostRateCodeCriteriaType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetRevenueDate

`func (o *PostRateCodeCriteriaType) GetRevenueDate() string`

GetRevenueDate returns the RevenueDate field if non-nil, zero value otherwise.

### GetRevenueDateOk

`func (o *PostRateCodeCriteriaType) GetRevenueDateOk() (*string, bool)`

GetRevenueDateOk returns a tuple with the RevenueDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueDate

`func (o *PostRateCodeCriteriaType) SetRevenueDate(v string)`

SetRevenueDate sets RevenueDate field to given value.

### HasRevenueDate

`func (o *PostRateCodeCriteriaType) HasRevenueDate() bool`

HasRevenueDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


