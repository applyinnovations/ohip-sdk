# ConfigBankAccountType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property of the bank account. | [optional] 
**BankAccountId** | Pointer to **float32** | Bank account ID. | [optional] 
**BankAccountNumber** | Pointer to **string** | Account number at the bank. | [optional] 
**BankCode** | Pointer to **string** | Unique code of the bank. | [optional] 
**BranchCode** | Pointer to **string** | Code for the branch of the bank. | [optional] 
**BankName** | Pointer to **string** | Name of the bank account. | [optional] 
**RoutingNumber** | Pointer to **string** | Routing number for the bank account. | [optional] 
**PaymentMethod** | Pointer to [**CommissionConfigPaymentMethodType**](CommissionConfigPaymentMethodType.md) |  | [optional] 
**Format** | Pointer to **string** | Type of format for Payment Method. | [optional] 
**LastExportDate** | Pointer to **string** | Used to hold last exported date for commission export. | [optional] 
**LastExportFileNo** | Pointer to **int32** | Used to hold last exported filename for commission export. | [optional] 
**NextCheckNumber** | Pointer to **float32** | Next check number used by commission handling module for bank account selected. | [optional] 
**MinProcessingAmount** | Pointer to **float32** | Minimum amount required to produce a check through commission processing for the selected account. | [optional] 
**Currency** | Pointer to **string** | Currency associated with the bank account. | [optional] 
**CheckStubLines** | Pointer to **float32** | Number of lines to be printed on check stub. | [optional] 
**Language** | Pointer to **string** | Language identification. | [optional] 
**SourceImportDirectory** | Pointer to **string** | Source directory for importing commission information. | [optional] 
**TargetImportDirectory** | Pointer to **string** | Target directory where import files will be stored. | [optional] 
**EditCheckNumber** | Pointer to **bool** | Check number allowed to be edited true/false. | [optional] 
**ValidateIATANumber** | Pointer to **bool** | Force validation of TA/Source IATA number during commision payment process. | [optional] 
**Default** | Pointer to **bool** | Default Bank Account for that resort. | [optional] 
**DefaultForCurrency** | Pointer to **bool** | Used mainly to figure out default bank for resort and currency combination. | [optional] 
**PositivePayExport** | Pointer to **bool** | Indicate that the bank account uses Positive Pay Export. | [optional] 
**Report1099** | Pointer to **bool** | Indicates that bank account uses 1099 report. | [optional] 

## Methods

### NewConfigBankAccountType

`func NewConfigBankAccountType() *ConfigBankAccountType`

NewConfigBankAccountType instantiates a new ConfigBankAccountType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfigBankAccountTypeWithDefaults

`func NewConfigBankAccountTypeWithDefaults() *ConfigBankAccountType`

NewConfigBankAccountTypeWithDefaults instantiates a new ConfigBankAccountType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ConfigBankAccountType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ConfigBankAccountType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ConfigBankAccountType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ConfigBankAccountType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetBankAccountId

`func (o *ConfigBankAccountType) GetBankAccountId() float32`

GetBankAccountId returns the BankAccountId field if non-nil, zero value otherwise.

### GetBankAccountIdOk

`func (o *ConfigBankAccountType) GetBankAccountIdOk() (*float32, bool)`

GetBankAccountIdOk returns a tuple with the BankAccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBankAccountId

`func (o *ConfigBankAccountType) SetBankAccountId(v float32)`

SetBankAccountId sets BankAccountId field to given value.

### HasBankAccountId

`func (o *ConfigBankAccountType) HasBankAccountId() bool`

HasBankAccountId returns a boolean if a field has been set.

### GetBankAccountNumber

`func (o *ConfigBankAccountType) GetBankAccountNumber() string`

GetBankAccountNumber returns the BankAccountNumber field if non-nil, zero value otherwise.

### GetBankAccountNumberOk

`func (o *ConfigBankAccountType) GetBankAccountNumberOk() (*string, bool)`

GetBankAccountNumberOk returns a tuple with the BankAccountNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBankAccountNumber

`func (o *ConfigBankAccountType) SetBankAccountNumber(v string)`

SetBankAccountNumber sets BankAccountNumber field to given value.

### HasBankAccountNumber

`func (o *ConfigBankAccountType) HasBankAccountNumber() bool`

HasBankAccountNumber returns a boolean if a field has been set.

### GetBankCode

`func (o *ConfigBankAccountType) GetBankCode() string`

GetBankCode returns the BankCode field if non-nil, zero value otherwise.

### GetBankCodeOk

`func (o *ConfigBankAccountType) GetBankCodeOk() (*string, bool)`

GetBankCodeOk returns a tuple with the BankCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBankCode

`func (o *ConfigBankAccountType) SetBankCode(v string)`

SetBankCode sets BankCode field to given value.

### HasBankCode

`func (o *ConfigBankAccountType) HasBankCode() bool`

HasBankCode returns a boolean if a field has been set.

### GetBranchCode

`func (o *ConfigBankAccountType) GetBranchCode() string`

GetBranchCode returns the BranchCode field if non-nil, zero value otherwise.

### GetBranchCodeOk

`func (o *ConfigBankAccountType) GetBranchCodeOk() (*string, bool)`

GetBranchCodeOk returns a tuple with the BranchCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBranchCode

`func (o *ConfigBankAccountType) SetBranchCode(v string)`

SetBranchCode sets BranchCode field to given value.

### HasBranchCode

`func (o *ConfigBankAccountType) HasBranchCode() bool`

HasBranchCode returns a boolean if a field has been set.

### GetBankName

`func (o *ConfigBankAccountType) GetBankName() string`

GetBankName returns the BankName field if non-nil, zero value otherwise.

### GetBankNameOk

`func (o *ConfigBankAccountType) GetBankNameOk() (*string, bool)`

GetBankNameOk returns a tuple with the BankName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBankName

`func (o *ConfigBankAccountType) SetBankName(v string)`

SetBankName sets BankName field to given value.

### HasBankName

`func (o *ConfigBankAccountType) HasBankName() bool`

HasBankName returns a boolean if a field has been set.

### GetRoutingNumber

`func (o *ConfigBankAccountType) GetRoutingNumber() string`

GetRoutingNumber returns the RoutingNumber field if non-nil, zero value otherwise.

### GetRoutingNumberOk

`func (o *ConfigBankAccountType) GetRoutingNumberOk() (*string, bool)`

GetRoutingNumberOk returns a tuple with the RoutingNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoutingNumber

`func (o *ConfigBankAccountType) SetRoutingNumber(v string)`

SetRoutingNumber sets RoutingNumber field to given value.

### HasRoutingNumber

`func (o *ConfigBankAccountType) HasRoutingNumber() bool`

HasRoutingNumber returns a boolean if a field has been set.

### GetPaymentMethod

`func (o *ConfigBankAccountType) GetPaymentMethod() CommissionConfigPaymentMethodType`

GetPaymentMethod returns the PaymentMethod field if non-nil, zero value otherwise.

### GetPaymentMethodOk

`func (o *ConfigBankAccountType) GetPaymentMethodOk() (*CommissionConfigPaymentMethodType, bool)`

GetPaymentMethodOk returns a tuple with the PaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethod

`func (o *ConfigBankAccountType) SetPaymentMethod(v CommissionConfigPaymentMethodType)`

SetPaymentMethod sets PaymentMethod field to given value.

### HasPaymentMethod

`func (o *ConfigBankAccountType) HasPaymentMethod() bool`

HasPaymentMethod returns a boolean if a field has been set.

### GetFormat

`func (o *ConfigBankAccountType) GetFormat() string`

GetFormat returns the Format field if non-nil, zero value otherwise.

### GetFormatOk

`func (o *ConfigBankAccountType) GetFormatOk() (*string, bool)`

GetFormatOk returns a tuple with the Format field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormat

`func (o *ConfigBankAccountType) SetFormat(v string)`

SetFormat sets Format field to given value.

### HasFormat

`func (o *ConfigBankAccountType) HasFormat() bool`

HasFormat returns a boolean if a field has been set.

### GetLastExportDate

`func (o *ConfigBankAccountType) GetLastExportDate() string`

GetLastExportDate returns the LastExportDate field if non-nil, zero value otherwise.

### GetLastExportDateOk

`func (o *ConfigBankAccountType) GetLastExportDateOk() (*string, bool)`

GetLastExportDateOk returns a tuple with the LastExportDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastExportDate

`func (o *ConfigBankAccountType) SetLastExportDate(v string)`

SetLastExportDate sets LastExportDate field to given value.

### HasLastExportDate

`func (o *ConfigBankAccountType) HasLastExportDate() bool`

HasLastExportDate returns a boolean if a field has been set.

### GetLastExportFileNo

`func (o *ConfigBankAccountType) GetLastExportFileNo() int32`

GetLastExportFileNo returns the LastExportFileNo field if non-nil, zero value otherwise.

### GetLastExportFileNoOk

`func (o *ConfigBankAccountType) GetLastExportFileNoOk() (*int32, bool)`

GetLastExportFileNoOk returns a tuple with the LastExportFileNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastExportFileNo

`func (o *ConfigBankAccountType) SetLastExportFileNo(v int32)`

SetLastExportFileNo sets LastExportFileNo field to given value.

### HasLastExportFileNo

`func (o *ConfigBankAccountType) HasLastExportFileNo() bool`

HasLastExportFileNo returns a boolean if a field has been set.

### GetNextCheckNumber

`func (o *ConfigBankAccountType) GetNextCheckNumber() float32`

GetNextCheckNumber returns the NextCheckNumber field if non-nil, zero value otherwise.

### GetNextCheckNumberOk

`func (o *ConfigBankAccountType) GetNextCheckNumberOk() (*float32, bool)`

GetNextCheckNumberOk returns a tuple with the NextCheckNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextCheckNumber

`func (o *ConfigBankAccountType) SetNextCheckNumber(v float32)`

SetNextCheckNumber sets NextCheckNumber field to given value.

### HasNextCheckNumber

`func (o *ConfigBankAccountType) HasNextCheckNumber() bool`

HasNextCheckNumber returns a boolean if a field has been set.

### GetMinProcessingAmount

`func (o *ConfigBankAccountType) GetMinProcessingAmount() float32`

GetMinProcessingAmount returns the MinProcessingAmount field if non-nil, zero value otherwise.

### GetMinProcessingAmountOk

`func (o *ConfigBankAccountType) GetMinProcessingAmountOk() (*float32, bool)`

GetMinProcessingAmountOk returns a tuple with the MinProcessingAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinProcessingAmount

`func (o *ConfigBankAccountType) SetMinProcessingAmount(v float32)`

SetMinProcessingAmount sets MinProcessingAmount field to given value.

### HasMinProcessingAmount

`func (o *ConfigBankAccountType) HasMinProcessingAmount() bool`

HasMinProcessingAmount returns a boolean if a field has been set.

### GetCurrency

`func (o *ConfigBankAccountType) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *ConfigBankAccountType) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *ConfigBankAccountType) SetCurrency(v string)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *ConfigBankAccountType) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### GetCheckStubLines

`func (o *ConfigBankAccountType) GetCheckStubLines() float32`

GetCheckStubLines returns the CheckStubLines field if non-nil, zero value otherwise.

### GetCheckStubLinesOk

`func (o *ConfigBankAccountType) GetCheckStubLinesOk() (*float32, bool)`

GetCheckStubLinesOk returns a tuple with the CheckStubLines field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckStubLines

`func (o *ConfigBankAccountType) SetCheckStubLines(v float32)`

SetCheckStubLines sets CheckStubLines field to given value.

### HasCheckStubLines

`func (o *ConfigBankAccountType) HasCheckStubLines() bool`

HasCheckStubLines returns a boolean if a field has been set.

### GetLanguage

`func (o *ConfigBankAccountType) GetLanguage() string`

GetLanguage returns the Language field if non-nil, zero value otherwise.

### GetLanguageOk

`func (o *ConfigBankAccountType) GetLanguageOk() (*string, bool)`

GetLanguageOk returns a tuple with the Language field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLanguage

`func (o *ConfigBankAccountType) SetLanguage(v string)`

SetLanguage sets Language field to given value.

### HasLanguage

`func (o *ConfigBankAccountType) HasLanguage() bool`

HasLanguage returns a boolean if a field has been set.

### GetSourceImportDirectory

`func (o *ConfigBankAccountType) GetSourceImportDirectory() string`

GetSourceImportDirectory returns the SourceImportDirectory field if non-nil, zero value otherwise.

### GetSourceImportDirectoryOk

`func (o *ConfigBankAccountType) GetSourceImportDirectoryOk() (*string, bool)`

GetSourceImportDirectoryOk returns a tuple with the SourceImportDirectory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceImportDirectory

`func (o *ConfigBankAccountType) SetSourceImportDirectory(v string)`

SetSourceImportDirectory sets SourceImportDirectory field to given value.

### HasSourceImportDirectory

`func (o *ConfigBankAccountType) HasSourceImportDirectory() bool`

HasSourceImportDirectory returns a boolean if a field has been set.

### GetTargetImportDirectory

`func (o *ConfigBankAccountType) GetTargetImportDirectory() string`

GetTargetImportDirectory returns the TargetImportDirectory field if non-nil, zero value otherwise.

### GetTargetImportDirectoryOk

`func (o *ConfigBankAccountType) GetTargetImportDirectoryOk() (*string, bool)`

GetTargetImportDirectoryOk returns a tuple with the TargetImportDirectory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetImportDirectory

`func (o *ConfigBankAccountType) SetTargetImportDirectory(v string)`

SetTargetImportDirectory sets TargetImportDirectory field to given value.

### HasTargetImportDirectory

`func (o *ConfigBankAccountType) HasTargetImportDirectory() bool`

HasTargetImportDirectory returns a boolean if a field has been set.

### GetEditCheckNumber

`func (o *ConfigBankAccountType) GetEditCheckNumber() bool`

GetEditCheckNumber returns the EditCheckNumber field if non-nil, zero value otherwise.

### GetEditCheckNumberOk

`func (o *ConfigBankAccountType) GetEditCheckNumberOk() (*bool, bool)`

GetEditCheckNumberOk returns a tuple with the EditCheckNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditCheckNumber

`func (o *ConfigBankAccountType) SetEditCheckNumber(v bool)`

SetEditCheckNumber sets EditCheckNumber field to given value.

### HasEditCheckNumber

`func (o *ConfigBankAccountType) HasEditCheckNumber() bool`

HasEditCheckNumber returns a boolean if a field has been set.

### GetValidateIATANumber

`func (o *ConfigBankAccountType) GetValidateIATANumber() bool`

GetValidateIATANumber returns the ValidateIATANumber field if non-nil, zero value otherwise.

### GetValidateIATANumberOk

`func (o *ConfigBankAccountType) GetValidateIATANumberOk() (*bool, bool)`

GetValidateIATANumberOk returns a tuple with the ValidateIATANumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidateIATANumber

`func (o *ConfigBankAccountType) SetValidateIATANumber(v bool)`

SetValidateIATANumber sets ValidateIATANumber field to given value.

### HasValidateIATANumber

`func (o *ConfigBankAccountType) HasValidateIATANumber() bool`

HasValidateIATANumber returns a boolean if a field has been set.

### GetDefault

`func (o *ConfigBankAccountType) GetDefault() bool`

GetDefault returns the Default field if non-nil, zero value otherwise.

### GetDefaultOk

`func (o *ConfigBankAccountType) GetDefaultOk() (*bool, bool)`

GetDefaultOk returns a tuple with the Default field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefault

`func (o *ConfigBankAccountType) SetDefault(v bool)`

SetDefault sets Default field to given value.

### HasDefault

`func (o *ConfigBankAccountType) HasDefault() bool`

HasDefault returns a boolean if a field has been set.

### GetDefaultForCurrency

`func (o *ConfigBankAccountType) GetDefaultForCurrency() bool`

GetDefaultForCurrency returns the DefaultForCurrency field if non-nil, zero value otherwise.

### GetDefaultForCurrencyOk

`func (o *ConfigBankAccountType) GetDefaultForCurrencyOk() (*bool, bool)`

GetDefaultForCurrencyOk returns a tuple with the DefaultForCurrency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultForCurrency

`func (o *ConfigBankAccountType) SetDefaultForCurrency(v bool)`

SetDefaultForCurrency sets DefaultForCurrency field to given value.

### HasDefaultForCurrency

`func (o *ConfigBankAccountType) HasDefaultForCurrency() bool`

HasDefaultForCurrency returns a boolean if a field has been set.

### GetPositivePayExport

`func (o *ConfigBankAccountType) GetPositivePayExport() bool`

GetPositivePayExport returns the PositivePayExport field if non-nil, zero value otherwise.

### GetPositivePayExportOk

`func (o *ConfigBankAccountType) GetPositivePayExportOk() (*bool, bool)`

GetPositivePayExportOk returns a tuple with the PositivePayExport field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPositivePayExport

`func (o *ConfigBankAccountType) SetPositivePayExport(v bool)`

SetPositivePayExport sets PositivePayExport field to given value.

### HasPositivePayExport

`func (o *ConfigBankAccountType) HasPositivePayExport() bool`

HasPositivePayExport returns a boolean if a field has been set.

### GetReport1099

`func (o *ConfigBankAccountType) GetReport1099() bool`

GetReport1099 returns the Report1099 field if non-nil, zero value otherwise.

### GetReport1099Ok

`func (o *ConfigBankAccountType) GetReport1099Ok() (*bool, bool)`

GetReport1099Ok returns a tuple with the Report1099 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReport1099

`func (o *ConfigBankAccountType) SetReport1099(v bool)`

SetReport1099 sets Report1099 field to given value.

### HasReport1099

`func (o *ConfigBankAccountType) HasReport1099() bool`

HasReport1099 returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


