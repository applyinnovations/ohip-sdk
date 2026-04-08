# DepositFolioCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property where the charges are to be posted. | [optional] 
**Charges** | Pointer to [**[]ChargeCriteriaType**](ChargeCriteriaType.md) | Collection of Charges to be posted. | [optional] 
**Payments** | Pointer to [**[]PaymentCriteriaType**](PaymentCriteriaType.md) | The payment information to be posted. | [optional] 
**FiscalFolioInfo** | Pointer to [**FiscalServiceType**](FiscalServiceType.md) |  | [optional] 
**IncomeAuditDate** | Pointer to **string** | Date of the Audit. This is used when postings are being created using the Income Audit functionality. | [optional] 
**FiscalTerminalId** | Pointer to **string** | Applicable for Fiscal Terminal. The ID of the terminal where the fiscal device is connected. | [optional] 
**FolioNameValue** | Pointer to [**[]NameValueHeaderDetailType**](NameValueHeaderDetailType.md) | Custom Folio Name Value Informatoin to be saved | [optional] 
**TrxServiceType** | Pointer to **string** | Transaction service type which the Folio is being associated. | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**ProfileId** | Pointer to [**ProfileId**](ProfileId.md) |  | [optional] 
**GuaranteeCode** | Pointer to **string** | New guarantee code associated with reservation. | [optional] 
**DepositPolicyId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**PaymentMethod** | Pointer to [**ReservationPaymentMethodType**](ReservationPaymentMethodType.md) |  | [optional] 
**SimpleFolio** | Pointer to **bool** | This flag signifies that generated Folio is Normal or Simple Folio. Certain countries of the World mandate a simple folio when the invoice amount is less than defined threshold. | [optional] 
**OverrideInventoryCheck** | Pointer to **bool** | Flag to indicate if the Inventory check has to be overridden when the guarantee code of the reservation is changed. | [optional] 
**ManualFolioNo** | Pointer to **int32** | Manual Folio Number used for deposit folio.This applies to certain country requirements. | [optional] 

## Methods

### NewDepositFolioCriteriaType

`func NewDepositFolioCriteriaType() *DepositFolioCriteriaType`

NewDepositFolioCriteriaType instantiates a new DepositFolioCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDepositFolioCriteriaTypeWithDefaults

`func NewDepositFolioCriteriaTypeWithDefaults() *DepositFolioCriteriaType`

NewDepositFolioCriteriaTypeWithDefaults instantiates a new DepositFolioCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *DepositFolioCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *DepositFolioCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *DepositFolioCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *DepositFolioCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetCharges

`func (o *DepositFolioCriteriaType) GetCharges() []ChargeCriteriaType`

GetCharges returns the Charges field if non-nil, zero value otherwise.

### GetChargesOk

`func (o *DepositFolioCriteriaType) GetChargesOk() (*[]ChargeCriteriaType, bool)`

GetChargesOk returns a tuple with the Charges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCharges

`func (o *DepositFolioCriteriaType) SetCharges(v []ChargeCriteriaType)`

SetCharges sets Charges field to given value.

### HasCharges

`func (o *DepositFolioCriteriaType) HasCharges() bool`

HasCharges returns a boolean if a field has been set.

### GetPayments

`func (o *DepositFolioCriteriaType) GetPayments() []PaymentCriteriaType`

GetPayments returns the Payments field if non-nil, zero value otherwise.

### GetPaymentsOk

`func (o *DepositFolioCriteriaType) GetPaymentsOk() (*[]PaymentCriteriaType, bool)`

GetPaymentsOk returns a tuple with the Payments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayments

`func (o *DepositFolioCriteriaType) SetPayments(v []PaymentCriteriaType)`

SetPayments sets Payments field to given value.

### HasPayments

`func (o *DepositFolioCriteriaType) HasPayments() bool`

HasPayments returns a boolean if a field has been set.

### GetFiscalFolioInfo

`func (o *DepositFolioCriteriaType) GetFiscalFolioInfo() FiscalServiceType`

GetFiscalFolioInfo returns the FiscalFolioInfo field if non-nil, zero value otherwise.

### GetFiscalFolioInfoOk

`func (o *DepositFolioCriteriaType) GetFiscalFolioInfoOk() (*FiscalServiceType, bool)`

GetFiscalFolioInfoOk returns a tuple with the FiscalFolioInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalFolioInfo

`func (o *DepositFolioCriteriaType) SetFiscalFolioInfo(v FiscalServiceType)`

SetFiscalFolioInfo sets FiscalFolioInfo field to given value.

### HasFiscalFolioInfo

`func (o *DepositFolioCriteriaType) HasFiscalFolioInfo() bool`

HasFiscalFolioInfo returns a boolean if a field has been set.

### GetIncomeAuditDate

`func (o *DepositFolioCriteriaType) GetIncomeAuditDate() string`

GetIncomeAuditDate returns the IncomeAuditDate field if non-nil, zero value otherwise.

### GetIncomeAuditDateOk

`func (o *DepositFolioCriteriaType) GetIncomeAuditDateOk() (*string, bool)`

GetIncomeAuditDateOk returns a tuple with the IncomeAuditDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncomeAuditDate

`func (o *DepositFolioCriteriaType) SetIncomeAuditDate(v string)`

SetIncomeAuditDate sets IncomeAuditDate field to given value.

### HasIncomeAuditDate

`func (o *DepositFolioCriteriaType) HasIncomeAuditDate() bool`

HasIncomeAuditDate returns a boolean if a field has been set.

### GetFiscalTerminalId

`func (o *DepositFolioCriteriaType) GetFiscalTerminalId() string`

GetFiscalTerminalId returns the FiscalTerminalId field if non-nil, zero value otherwise.

### GetFiscalTerminalIdOk

`func (o *DepositFolioCriteriaType) GetFiscalTerminalIdOk() (*string, bool)`

GetFiscalTerminalIdOk returns a tuple with the FiscalTerminalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalTerminalId

`func (o *DepositFolioCriteriaType) SetFiscalTerminalId(v string)`

SetFiscalTerminalId sets FiscalTerminalId field to given value.

### HasFiscalTerminalId

`func (o *DepositFolioCriteriaType) HasFiscalTerminalId() bool`

HasFiscalTerminalId returns a boolean if a field has been set.

### GetFolioNameValue

`func (o *DepositFolioCriteriaType) GetFolioNameValue() []NameValueHeaderDetailType`

GetFolioNameValue returns the FolioNameValue field if non-nil, zero value otherwise.

### GetFolioNameValueOk

`func (o *DepositFolioCriteriaType) GetFolioNameValueOk() (*[]NameValueHeaderDetailType, bool)`

GetFolioNameValueOk returns a tuple with the FolioNameValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioNameValue

`func (o *DepositFolioCriteriaType) SetFolioNameValue(v []NameValueHeaderDetailType)`

SetFolioNameValue sets FolioNameValue field to given value.

### HasFolioNameValue

`func (o *DepositFolioCriteriaType) HasFolioNameValue() bool`

HasFolioNameValue returns a boolean if a field has been set.

### GetTrxServiceType

`func (o *DepositFolioCriteriaType) GetTrxServiceType() string`

GetTrxServiceType returns the TrxServiceType field if non-nil, zero value otherwise.

### GetTrxServiceTypeOk

`func (o *DepositFolioCriteriaType) GetTrxServiceTypeOk() (*string, bool)`

GetTrxServiceTypeOk returns a tuple with the TrxServiceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrxServiceType

`func (o *DepositFolioCriteriaType) SetTrxServiceType(v string)`

SetTrxServiceType sets TrxServiceType field to given value.

### HasTrxServiceType

`func (o *DepositFolioCriteriaType) HasTrxServiceType() bool`

HasTrxServiceType returns a boolean if a field has been set.

### GetCashierId

`func (o *DepositFolioCriteriaType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *DepositFolioCriteriaType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *DepositFolioCriteriaType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *DepositFolioCriteriaType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetReservationId

`func (o *DepositFolioCriteriaType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *DepositFolioCriteriaType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *DepositFolioCriteriaType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *DepositFolioCriteriaType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetProfileId

`func (o *DepositFolioCriteriaType) GetProfileId() ProfileId`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *DepositFolioCriteriaType) GetProfileIdOk() (*ProfileId, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *DepositFolioCriteriaType) SetProfileId(v ProfileId)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *DepositFolioCriteriaType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetGuaranteeCode

`func (o *DepositFolioCriteriaType) GetGuaranteeCode() string`

GetGuaranteeCode returns the GuaranteeCode field if non-nil, zero value otherwise.

### GetGuaranteeCodeOk

`func (o *DepositFolioCriteriaType) GetGuaranteeCodeOk() (*string, bool)`

GetGuaranteeCodeOk returns a tuple with the GuaranteeCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuaranteeCode

`func (o *DepositFolioCriteriaType) SetGuaranteeCode(v string)`

SetGuaranteeCode sets GuaranteeCode field to given value.

### HasGuaranteeCode

`func (o *DepositFolioCriteriaType) HasGuaranteeCode() bool`

HasGuaranteeCode returns a boolean if a field has been set.

### GetDepositPolicyId

`func (o *DepositFolioCriteriaType) GetDepositPolicyId() UniqueIDType`

GetDepositPolicyId returns the DepositPolicyId field if non-nil, zero value otherwise.

### GetDepositPolicyIdOk

`func (o *DepositFolioCriteriaType) GetDepositPolicyIdOk() (*UniqueIDType, bool)`

GetDepositPolicyIdOk returns a tuple with the DepositPolicyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepositPolicyId

`func (o *DepositFolioCriteriaType) SetDepositPolicyId(v UniqueIDType)`

SetDepositPolicyId sets DepositPolicyId field to given value.

### HasDepositPolicyId

`func (o *DepositFolioCriteriaType) HasDepositPolicyId() bool`

HasDepositPolicyId returns a boolean if a field has been set.

### GetPaymentMethod

`func (o *DepositFolioCriteriaType) GetPaymentMethod() ReservationPaymentMethodType`

GetPaymentMethod returns the PaymentMethod field if non-nil, zero value otherwise.

### GetPaymentMethodOk

`func (o *DepositFolioCriteriaType) GetPaymentMethodOk() (*ReservationPaymentMethodType, bool)`

GetPaymentMethodOk returns a tuple with the PaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethod

`func (o *DepositFolioCriteriaType) SetPaymentMethod(v ReservationPaymentMethodType)`

SetPaymentMethod sets PaymentMethod field to given value.

### HasPaymentMethod

`func (o *DepositFolioCriteriaType) HasPaymentMethod() bool`

HasPaymentMethod returns a boolean if a field has been set.

### GetSimpleFolio

`func (o *DepositFolioCriteriaType) GetSimpleFolio() bool`

GetSimpleFolio returns the SimpleFolio field if non-nil, zero value otherwise.

### GetSimpleFolioOk

`func (o *DepositFolioCriteriaType) GetSimpleFolioOk() (*bool, bool)`

GetSimpleFolioOk returns a tuple with the SimpleFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSimpleFolio

`func (o *DepositFolioCriteriaType) SetSimpleFolio(v bool)`

SetSimpleFolio sets SimpleFolio field to given value.

### HasSimpleFolio

`func (o *DepositFolioCriteriaType) HasSimpleFolio() bool`

HasSimpleFolio returns a boolean if a field has been set.

### GetOverrideInventoryCheck

`func (o *DepositFolioCriteriaType) GetOverrideInventoryCheck() bool`

GetOverrideInventoryCheck returns the OverrideInventoryCheck field if non-nil, zero value otherwise.

### GetOverrideInventoryCheckOk

`func (o *DepositFolioCriteriaType) GetOverrideInventoryCheckOk() (*bool, bool)`

GetOverrideInventoryCheckOk returns a tuple with the OverrideInventoryCheck field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideInventoryCheck

`func (o *DepositFolioCriteriaType) SetOverrideInventoryCheck(v bool)`

SetOverrideInventoryCheck sets OverrideInventoryCheck field to given value.

### HasOverrideInventoryCheck

`func (o *DepositFolioCriteriaType) HasOverrideInventoryCheck() bool`

HasOverrideInventoryCheck returns a boolean if a field has been set.

### GetManualFolioNo

`func (o *DepositFolioCriteriaType) GetManualFolioNo() int32`

GetManualFolioNo returns the ManualFolioNo field if non-nil, zero value otherwise.

### GetManualFolioNoOk

`func (o *DepositFolioCriteriaType) GetManualFolioNoOk() (*int32, bool)`

GetManualFolioNoOk returns a tuple with the ManualFolioNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManualFolioNo

`func (o *DepositFolioCriteriaType) SetManualFolioNo(v int32)`

SetManualFolioNo sets ManualFolioNo field to given value.

### HasManualFolioNo

`func (o *DepositFolioCriteriaType) HasManualFolioNo() bool`

HasManualFolioNo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


