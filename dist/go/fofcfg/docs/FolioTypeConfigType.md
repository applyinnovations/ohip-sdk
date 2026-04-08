# FolioTypeConfigType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel where the code is configured. | [optional] 
**Code** | Pointer to **string** | Configuration code. | [optional] 
**TaxType** | Pointer to **string** | Name Tax Type associated with folio type. | [optional] 
**GuestClassification** | Pointer to **string** | Type of guest Individual, Professional, etc, used in certain countries. | [optional] 
**TransactionServiceType** | Pointer to **string** | Identify the service type of transaction, used in certain countries. | [optional] 
**FolioReports** | Pointer to [**[]FolioReportType**](FolioReportType.md) | Information details of the Folio Reports associated with Folio Type Name. | [optional] 
**AssociatedCreditFolioType** | Pointer to **string** | Stores the Linked Associated Credit Folio Type. | [optional] 
**ProfileAttributes** | Pointer to [**FolioTypeProfileAttributes**](FolioTypeProfileAttributes.md) |  | [optional] 
**FiscalFolio** | Pointer to **bool** | Folio Type is fiscal or not, used in certain countries. | [optional] 
**SendFiscalFolio** | Pointer to **bool** | Adding this flag at folio type level would decide to send fiscal folio (generate payload) or not. | [optional] 
**CorrectionFolio** | Pointer to **bool** | Folio type is the correction or not, used in certain countries. | [optional] 
**DebitFolio** | Pointer to **bool** | Folio type is a debit folio or not, used in certain countries. | [optional] 
**DepositFolio** | Pointer to **bool** | Folio type is a deposit folio type or not, used in certain countries. | [optional] 
**SimpleFolio** | Pointer to **bool** | Folio type is a simple folio type or not, used in certain countries. | [optional] 
**InternalFolio** | Pointer to **bool** | Folio type is internal or not, used in certain countries. | [optional] 
**ARFolio** | Pointer to **bool** | Folio type is Account Receivable or not, used in certain countries. | [optional] 
**ManualFolio** | Pointer to **bool** | Folio type has a manual folio type associated or not, used in certain countries. | [optional] 
**InformationFolio** | Pointer to **bool** | Used only for Information and Pro-forma folios in certain countries. | [optional] 
**UseNationality** | Pointer to **bool** | Folio type is used for Local national or foreigner, used in certain countries. | [optional] 
**CityLedgerFolio** | Pointer to **bool** | Folio type is used for City Ledger bills or not or not, used in certain countries. | [optional] 
**UseTaxNumber** | Pointer to **bool** | Folio type is used for profiles which have a tax number or not, used in certain countries. | [optional] 
**AllowFolioCompression** | Pointer to **bool** | Allowed to create compressed folio on existing folio type if user tries to compress on the folio otherwise user is not allowed to compress, used in certain countries. | [optional] 
**CompressedFolio** | Pointer to **bool** | Folio type is Compressible or not, indicates that the folio which was created is a Compressed Folio based on the AllowFolioCompression flag, used in certain countries. | [optional] 
**AllowCreditFolio** | Pointer to **bool** | Allowed to create credit folio on existing folio type if user gives the credit on the folio otherwise user is not allowed to give a credit, used in certain countries. | [optional] 
**CreditFolio** | Pointer to **bool** | Folio type used for Credit Folio or not, indicates that the folio which was created is a Credit Folio based on the AllowCreditFolio flag , used in certain countries. | [optional] 
**AllowFolioConversion** | Pointer to **bool** | Folio type used for Converting the Folios, used in certain countries. | [optional] 
**FolioUsed** | Pointer to **bool** | Flag to indicate if the Folio Type has been used to create a Folio. | [optional] 
**SupplementalFolio** | Pointer to **bool** | Folio type is a supplemental folio ( debit bill ) type or not, used in certain countries. | [optional] 
**UseOriginalFolioStayDetails** | Pointer to **bool** | Use original folio stay details on the folio which was created using the folio type. | [optional] 
**DocumentCode** | Pointer to **string** | Document code which can be defined on each folio type, which is an alphanumeric value can be used on Invoices or other documents for tax purposes. E.g. In case of Portugal, this value is combined with Folio Number for ATCUD requirements. | [optional] 
**TaxFolio** | Pointer to **bool** | To indicate if the folio type is to be used for a tax folio. Used in Greece Country. | [optional] 
**FolioTypePrefix** | Pointer to **string** | Prefix used for folio type | [optional] 
**FolioTypeSuffix** | Pointer to **string** | Suffix used for folio type | [optional] 
**LastFolioNumber** | Pointer to **float32** | Last folio number issued for a folio type | [optional] 
**ProFormaFolio** | Pointer to **bool** | To indicate if the folio type is to be used for a proforma folio. | [optional] 

## Methods

### NewFolioTypeConfigType

`func NewFolioTypeConfigType() *FolioTypeConfigType`

NewFolioTypeConfigType instantiates a new FolioTypeConfigType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFolioTypeConfigTypeWithDefaults

`func NewFolioTypeConfigTypeWithDefaults() *FolioTypeConfigType`

NewFolioTypeConfigTypeWithDefaults instantiates a new FolioTypeConfigType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *FolioTypeConfigType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *FolioTypeConfigType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *FolioTypeConfigType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *FolioTypeConfigType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetCode

`func (o *FolioTypeConfigType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *FolioTypeConfigType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *FolioTypeConfigType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *FolioTypeConfigType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetTaxType

`func (o *FolioTypeConfigType) GetTaxType() string`

GetTaxType returns the TaxType field if non-nil, zero value otherwise.

### GetTaxTypeOk

`func (o *FolioTypeConfigType) GetTaxTypeOk() (*string, bool)`

GetTaxTypeOk returns a tuple with the TaxType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxType

`func (o *FolioTypeConfigType) SetTaxType(v string)`

SetTaxType sets TaxType field to given value.

### HasTaxType

`func (o *FolioTypeConfigType) HasTaxType() bool`

HasTaxType returns a boolean if a field has been set.

### GetGuestClassification

`func (o *FolioTypeConfigType) GetGuestClassification() string`

GetGuestClassification returns the GuestClassification field if non-nil, zero value otherwise.

### GetGuestClassificationOk

`func (o *FolioTypeConfigType) GetGuestClassificationOk() (*string, bool)`

GetGuestClassificationOk returns a tuple with the GuestClassification field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestClassification

`func (o *FolioTypeConfigType) SetGuestClassification(v string)`

SetGuestClassification sets GuestClassification field to given value.

### HasGuestClassification

`func (o *FolioTypeConfigType) HasGuestClassification() bool`

HasGuestClassification returns a boolean if a field has been set.

### GetTransactionServiceType

`func (o *FolioTypeConfigType) GetTransactionServiceType() string`

GetTransactionServiceType returns the TransactionServiceType field if non-nil, zero value otherwise.

### GetTransactionServiceTypeOk

`func (o *FolioTypeConfigType) GetTransactionServiceTypeOk() (*string, bool)`

GetTransactionServiceTypeOk returns a tuple with the TransactionServiceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionServiceType

`func (o *FolioTypeConfigType) SetTransactionServiceType(v string)`

SetTransactionServiceType sets TransactionServiceType field to given value.

### HasTransactionServiceType

`func (o *FolioTypeConfigType) HasTransactionServiceType() bool`

HasTransactionServiceType returns a boolean if a field has been set.

### GetFolioReports

`func (o *FolioTypeConfigType) GetFolioReports() []FolioReportType`

GetFolioReports returns the FolioReports field if non-nil, zero value otherwise.

### GetFolioReportsOk

`func (o *FolioTypeConfigType) GetFolioReportsOk() (*[]FolioReportType, bool)`

GetFolioReportsOk returns a tuple with the FolioReports field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioReports

`func (o *FolioTypeConfigType) SetFolioReports(v []FolioReportType)`

SetFolioReports sets FolioReports field to given value.

### HasFolioReports

`func (o *FolioTypeConfigType) HasFolioReports() bool`

HasFolioReports returns a boolean if a field has been set.

### GetAssociatedCreditFolioType

`func (o *FolioTypeConfigType) GetAssociatedCreditFolioType() string`

GetAssociatedCreditFolioType returns the AssociatedCreditFolioType field if non-nil, zero value otherwise.

### GetAssociatedCreditFolioTypeOk

`func (o *FolioTypeConfigType) GetAssociatedCreditFolioTypeOk() (*string, bool)`

GetAssociatedCreditFolioTypeOk returns a tuple with the AssociatedCreditFolioType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssociatedCreditFolioType

`func (o *FolioTypeConfigType) SetAssociatedCreditFolioType(v string)`

SetAssociatedCreditFolioType sets AssociatedCreditFolioType field to given value.

### HasAssociatedCreditFolioType

`func (o *FolioTypeConfigType) HasAssociatedCreditFolioType() bool`

HasAssociatedCreditFolioType returns a boolean if a field has been set.

### GetProfileAttributes

`func (o *FolioTypeConfigType) GetProfileAttributes() FolioTypeProfileAttributes`

GetProfileAttributes returns the ProfileAttributes field if non-nil, zero value otherwise.

### GetProfileAttributesOk

`func (o *FolioTypeConfigType) GetProfileAttributesOk() (*FolioTypeProfileAttributes, bool)`

GetProfileAttributesOk returns a tuple with the ProfileAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileAttributes

`func (o *FolioTypeConfigType) SetProfileAttributes(v FolioTypeProfileAttributes)`

SetProfileAttributes sets ProfileAttributes field to given value.

### HasProfileAttributes

`func (o *FolioTypeConfigType) HasProfileAttributes() bool`

HasProfileAttributes returns a boolean if a field has been set.

### GetFiscalFolio

`func (o *FolioTypeConfigType) GetFiscalFolio() bool`

GetFiscalFolio returns the FiscalFolio field if non-nil, zero value otherwise.

### GetFiscalFolioOk

`func (o *FolioTypeConfigType) GetFiscalFolioOk() (*bool, bool)`

GetFiscalFolioOk returns a tuple with the FiscalFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalFolio

`func (o *FolioTypeConfigType) SetFiscalFolio(v bool)`

SetFiscalFolio sets FiscalFolio field to given value.

### HasFiscalFolio

`func (o *FolioTypeConfigType) HasFiscalFolio() bool`

HasFiscalFolio returns a boolean if a field has been set.

### GetSendFiscalFolio

`func (o *FolioTypeConfigType) GetSendFiscalFolio() bool`

GetSendFiscalFolio returns the SendFiscalFolio field if non-nil, zero value otherwise.

### GetSendFiscalFolioOk

`func (o *FolioTypeConfigType) GetSendFiscalFolioOk() (*bool, bool)`

GetSendFiscalFolioOk returns a tuple with the SendFiscalFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSendFiscalFolio

`func (o *FolioTypeConfigType) SetSendFiscalFolio(v bool)`

SetSendFiscalFolio sets SendFiscalFolio field to given value.

### HasSendFiscalFolio

`func (o *FolioTypeConfigType) HasSendFiscalFolio() bool`

HasSendFiscalFolio returns a boolean if a field has been set.

### GetCorrectionFolio

`func (o *FolioTypeConfigType) GetCorrectionFolio() bool`

GetCorrectionFolio returns the CorrectionFolio field if non-nil, zero value otherwise.

### GetCorrectionFolioOk

`func (o *FolioTypeConfigType) GetCorrectionFolioOk() (*bool, bool)`

GetCorrectionFolioOk returns a tuple with the CorrectionFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorrectionFolio

`func (o *FolioTypeConfigType) SetCorrectionFolio(v bool)`

SetCorrectionFolio sets CorrectionFolio field to given value.

### HasCorrectionFolio

`func (o *FolioTypeConfigType) HasCorrectionFolio() bool`

HasCorrectionFolio returns a boolean if a field has been set.

### GetDebitFolio

`func (o *FolioTypeConfigType) GetDebitFolio() bool`

GetDebitFolio returns the DebitFolio field if non-nil, zero value otherwise.

### GetDebitFolioOk

`func (o *FolioTypeConfigType) GetDebitFolioOk() (*bool, bool)`

GetDebitFolioOk returns a tuple with the DebitFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDebitFolio

`func (o *FolioTypeConfigType) SetDebitFolio(v bool)`

SetDebitFolio sets DebitFolio field to given value.

### HasDebitFolio

`func (o *FolioTypeConfigType) HasDebitFolio() bool`

HasDebitFolio returns a boolean if a field has been set.

### GetDepositFolio

`func (o *FolioTypeConfigType) GetDepositFolio() bool`

GetDepositFolio returns the DepositFolio field if non-nil, zero value otherwise.

### GetDepositFolioOk

`func (o *FolioTypeConfigType) GetDepositFolioOk() (*bool, bool)`

GetDepositFolioOk returns a tuple with the DepositFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepositFolio

`func (o *FolioTypeConfigType) SetDepositFolio(v bool)`

SetDepositFolio sets DepositFolio field to given value.

### HasDepositFolio

`func (o *FolioTypeConfigType) HasDepositFolio() bool`

HasDepositFolio returns a boolean if a field has been set.

### GetSimpleFolio

`func (o *FolioTypeConfigType) GetSimpleFolio() bool`

GetSimpleFolio returns the SimpleFolio field if non-nil, zero value otherwise.

### GetSimpleFolioOk

`func (o *FolioTypeConfigType) GetSimpleFolioOk() (*bool, bool)`

GetSimpleFolioOk returns a tuple with the SimpleFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSimpleFolio

`func (o *FolioTypeConfigType) SetSimpleFolio(v bool)`

SetSimpleFolio sets SimpleFolio field to given value.

### HasSimpleFolio

`func (o *FolioTypeConfigType) HasSimpleFolio() bool`

HasSimpleFolio returns a boolean if a field has been set.

### GetInternalFolio

`func (o *FolioTypeConfigType) GetInternalFolio() bool`

GetInternalFolio returns the InternalFolio field if non-nil, zero value otherwise.

### GetInternalFolioOk

`func (o *FolioTypeConfigType) GetInternalFolioOk() (*bool, bool)`

GetInternalFolioOk returns a tuple with the InternalFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternalFolio

`func (o *FolioTypeConfigType) SetInternalFolio(v bool)`

SetInternalFolio sets InternalFolio field to given value.

### HasInternalFolio

`func (o *FolioTypeConfigType) HasInternalFolio() bool`

HasInternalFolio returns a boolean if a field has been set.

### GetARFolio

`func (o *FolioTypeConfigType) GetARFolio() bool`

GetARFolio returns the ARFolio field if non-nil, zero value otherwise.

### GetARFolioOk

`func (o *FolioTypeConfigType) GetARFolioOk() (*bool, bool)`

GetARFolioOk returns a tuple with the ARFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetARFolio

`func (o *FolioTypeConfigType) SetARFolio(v bool)`

SetARFolio sets ARFolio field to given value.

### HasARFolio

`func (o *FolioTypeConfigType) HasARFolio() bool`

HasARFolio returns a boolean if a field has been set.

### GetManualFolio

`func (o *FolioTypeConfigType) GetManualFolio() bool`

GetManualFolio returns the ManualFolio field if non-nil, zero value otherwise.

### GetManualFolioOk

`func (o *FolioTypeConfigType) GetManualFolioOk() (*bool, bool)`

GetManualFolioOk returns a tuple with the ManualFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManualFolio

`func (o *FolioTypeConfigType) SetManualFolio(v bool)`

SetManualFolio sets ManualFolio field to given value.

### HasManualFolio

`func (o *FolioTypeConfigType) HasManualFolio() bool`

HasManualFolio returns a boolean if a field has been set.

### GetInformationFolio

`func (o *FolioTypeConfigType) GetInformationFolio() bool`

GetInformationFolio returns the InformationFolio field if non-nil, zero value otherwise.

### GetInformationFolioOk

`func (o *FolioTypeConfigType) GetInformationFolioOk() (*bool, bool)`

GetInformationFolioOk returns a tuple with the InformationFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInformationFolio

`func (o *FolioTypeConfigType) SetInformationFolio(v bool)`

SetInformationFolio sets InformationFolio field to given value.

### HasInformationFolio

`func (o *FolioTypeConfigType) HasInformationFolio() bool`

HasInformationFolio returns a boolean if a field has been set.

### GetUseNationality

`func (o *FolioTypeConfigType) GetUseNationality() bool`

GetUseNationality returns the UseNationality field if non-nil, zero value otherwise.

### GetUseNationalityOk

`func (o *FolioTypeConfigType) GetUseNationalityOk() (*bool, bool)`

GetUseNationalityOk returns a tuple with the UseNationality field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseNationality

`func (o *FolioTypeConfigType) SetUseNationality(v bool)`

SetUseNationality sets UseNationality field to given value.

### HasUseNationality

`func (o *FolioTypeConfigType) HasUseNationality() bool`

HasUseNationality returns a boolean if a field has been set.

### GetCityLedgerFolio

`func (o *FolioTypeConfigType) GetCityLedgerFolio() bool`

GetCityLedgerFolio returns the CityLedgerFolio field if non-nil, zero value otherwise.

### GetCityLedgerFolioOk

`func (o *FolioTypeConfigType) GetCityLedgerFolioOk() (*bool, bool)`

GetCityLedgerFolioOk returns a tuple with the CityLedgerFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCityLedgerFolio

`func (o *FolioTypeConfigType) SetCityLedgerFolio(v bool)`

SetCityLedgerFolio sets CityLedgerFolio field to given value.

### HasCityLedgerFolio

`func (o *FolioTypeConfigType) HasCityLedgerFolio() bool`

HasCityLedgerFolio returns a boolean if a field has been set.

### GetUseTaxNumber

`func (o *FolioTypeConfigType) GetUseTaxNumber() bool`

GetUseTaxNumber returns the UseTaxNumber field if non-nil, zero value otherwise.

### GetUseTaxNumberOk

`func (o *FolioTypeConfigType) GetUseTaxNumberOk() (*bool, bool)`

GetUseTaxNumberOk returns a tuple with the UseTaxNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseTaxNumber

`func (o *FolioTypeConfigType) SetUseTaxNumber(v bool)`

SetUseTaxNumber sets UseTaxNumber field to given value.

### HasUseTaxNumber

`func (o *FolioTypeConfigType) HasUseTaxNumber() bool`

HasUseTaxNumber returns a boolean if a field has been set.

### GetAllowFolioCompression

`func (o *FolioTypeConfigType) GetAllowFolioCompression() bool`

GetAllowFolioCompression returns the AllowFolioCompression field if non-nil, zero value otherwise.

### GetAllowFolioCompressionOk

`func (o *FolioTypeConfigType) GetAllowFolioCompressionOk() (*bool, bool)`

GetAllowFolioCompressionOk returns a tuple with the AllowFolioCompression field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowFolioCompression

`func (o *FolioTypeConfigType) SetAllowFolioCompression(v bool)`

SetAllowFolioCompression sets AllowFolioCompression field to given value.

### HasAllowFolioCompression

`func (o *FolioTypeConfigType) HasAllowFolioCompression() bool`

HasAllowFolioCompression returns a boolean if a field has been set.

### GetCompressedFolio

`func (o *FolioTypeConfigType) GetCompressedFolio() bool`

GetCompressedFolio returns the CompressedFolio field if non-nil, zero value otherwise.

### GetCompressedFolioOk

`func (o *FolioTypeConfigType) GetCompressedFolioOk() (*bool, bool)`

GetCompressedFolioOk returns a tuple with the CompressedFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompressedFolio

`func (o *FolioTypeConfigType) SetCompressedFolio(v bool)`

SetCompressedFolio sets CompressedFolio field to given value.

### HasCompressedFolio

`func (o *FolioTypeConfigType) HasCompressedFolio() bool`

HasCompressedFolio returns a boolean if a field has been set.

### GetAllowCreditFolio

`func (o *FolioTypeConfigType) GetAllowCreditFolio() bool`

GetAllowCreditFolio returns the AllowCreditFolio field if non-nil, zero value otherwise.

### GetAllowCreditFolioOk

`func (o *FolioTypeConfigType) GetAllowCreditFolioOk() (*bool, bool)`

GetAllowCreditFolioOk returns a tuple with the AllowCreditFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowCreditFolio

`func (o *FolioTypeConfigType) SetAllowCreditFolio(v bool)`

SetAllowCreditFolio sets AllowCreditFolio field to given value.

### HasAllowCreditFolio

`func (o *FolioTypeConfigType) HasAllowCreditFolio() bool`

HasAllowCreditFolio returns a boolean if a field has been set.

### GetCreditFolio

`func (o *FolioTypeConfigType) GetCreditFolio() bool`

GetCreditFolio returns the CreditFolio field if non-nil, zero value otherwise.

### GetCreditFolioOk

`func (o *FolioTypeConfigType) GetCreditFolioOk() (*bool, bool)`

GetCreditFolioOk returns a tuple with the CreditFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditFolio

`func (o *FolioTypeConfigType) SetCreditFolio(v bool)`

SetCreditFolio sets CreditFolio field to given value.

### HasCreditFolio

`func (o *FolioTypeConfigType) HasCreditFolio() bool`

HasCreditFolio returns a boolean if a field has been set.

### GetAllowFolioConversion

`func (o *FolioTypeConfigType) GetAllowFolioConversion() bool`

GetAllowFolioConversion returns the AllowFolioConversion field if non-nil, zero value otherwise.

### GetAllowFolioConversionOk

`func (o *FolioTypeConfigType) GetAllowFolioConversionOk() (*bool, bool)`

GetAllowFolioConversionOk returns a tuple with the AllowFolioConversion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowFolioConversion

`func (o *FolioTypeConfigType) SetAllowFolioConversion(v bool)`

SetAllowFolioConversion sets AllowFolioConversion field to given value.

### HasAllowFolioConversion

`func (o *FolioTypeConfigType) HasAllowFolioConversion() bool`

HasAllowFolioConversion returns a boolean if a field has been set.

### GetFolioUsed

`func (o *FolioTypeConfigType) GetFolioUsed() bool`

GetFolioUsed returns the FolioUsed field if non-nil, zero value otherwise.

### GetFolioUsedOk

`func (o *FolioTypeConfigType) GetFolioUsedOk() (*bool, bool)`

GetFolioUsedOk returns a tuple with the FolioUsed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioUsed

`func (o *FolioTypeConfigType) SetFolioUsed(v bool)`

SetFolioUsed sets FolioUsed field to given value.

### HasFolioUsed

`func (o *FolioTypeConfigType) HasFolioUsed() bool`

HasFolioUsed returns a boolean if a field has been set.

### GetSupplementalFolio

`func (o *FolioTypeConfigType) GetSupplementalFolio() bool`

GetSupplementalFolio returns the SupplementalFolio field if non-nil, zero value otherwise.

### GetSupplementalFolioOk

`func (o *FolioTypeConfigType) GetSupplementalFolioOk() (*bool, bool)`

GetSupplementalFolioOk returns a tuple with the SupplementalFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupplementalFolio

`func (o *FolioTypeConfigType) SetSupplementalFolio(v bool)`

SetSupplementalFolio sets SupplementalFolio field to given value.

### HasSupplementalFolio

`func (o *FolioTypeConfigType) HasSupplementalFolio() bool`

HasSupplementalFolio returns a boolean if a field has been set.

### GetUseOriginalFolioStayDetails

`func (o *FolioTypeConfigType) GetUseOriginalFolioStayDetails() bool`

GetUseOriginalFolioStayDetails returns the UseOriginalFolioStayDetails field if non-nil, zero value otherwise.

### GetUseOriginalFolioStayDetailsOk

`func (o *FolioTypeConfigType) GetUseOriginalFolioStayDetailsOk() (*bool, bool)`

GetUseOriginalFolioStayDetailsOk returns a tuple with the UseOriginalFolioStayDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseOriginalFolioStayDetails

`func (o *FolioTypeConfigType) SetUseOriginalFolioStayDetails(v bool)`

SetUseOriginalFolioStayDetails sets UseOriginalFolioStayDetails field to given value.

### HasUseOriginalFolioStayDetails

`func (o *FolioTypeConfigType) HasUseOriginalFolioStayDetails() bool`

HasUseOriginalFolioStayDetails returns a boolean if a field has been set.

### GetDocumentCode

`func (o *FolioTypeConfigType) GetDocumentCode() string`

GetDocumentCode returns the DocumentCode field if non-nil, zero value otherwise.

### GetDocumentCodeOk

`func (o *FolioTypeConfigType) GetDocumentCodeOk() (*string, bool)`

GetDocumentCodeOk returns a tuple with the DocumentCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDocumentCode

`func (o *FolioTypeConfigType) SetDocumentCode(v string)`

SetDocumentCode sets DocumentCode field to given value.

### HasDocumentCode

`func (o *FolioTypeConfigType) HasDocumentCode() bool`

HasDocumentCode returns a boolean if a field has been set.

### GetTaxFolio

`func (o *FolioTypeConfigType) GetTaxFolio() bool`

GetTaxFolio returns the TaxFolio field if non-nil, zero value otherwise.

### GetTaxFolioOk

`func (o *FolioTypeConfigType) GetTaxFolioOk() (*bool, bool)`

GetTaxFolioOk returns a tuple with the TaxFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxFolio

`func (o *FolioTypeConfigType) SetTaxFolio(v bool)`

SetTaxFolio sets TaxFolio field to given value.

### HasTaxFolio

`func (o *FolioTypeConfigType) HasTaxFolio() bool`

HasTaxFolio returns a boolean if a field has been set.

### GetFolioTypePrefix

`func (o *FolioTypeConfigType) GetFolioTypePrefix() string`

GetFolioTypePrefix returns the FolioTypePrefix field if non-nil, zero value otherwise.

### GetFolioTypePrefixOk

`func (o *FolioTypeConfigType) GetFolioTypePrefixOk() (*string, bool)`

GetFolioTypePrefixOk returns a tuple with the FolioTypePrefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioTypePrefix

`func (o *FolioTypeConfigType) SetFolioTypePrefix(v string)`

SetFolioTypePrefix sets FolioTypePrefix field to given value.

### HasFolioTypePrefix

`func (o *FolioTypeConfigType) HasFolioTypePrefix() bool`

HasFolioTypePrefix returns a boolean if a field has been set.

### GetFolioTypeSuffix

`func (o *FolioTypeConfigType) GetFolioTypeSuffix() string`

GetFolioTypeSuffix returns the FolioTypeSuffix field if non-nil, zero value otherwise.

### GetFolioTypeSuffixOk

`func (o *FolioTypeConfigType) GetFolioTypeSuffixOk() (*string, bool)`

GetFolioTypeSuffixOk returns a tuple with the FolioTypeSuffix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioTypeSuffix

`func (o *FolioTypeConfigType) SetFolioTypeSuffix(v string)`

SetFolioTypeSuffix sets FolioTypeSuffix field to given value.

### HasFolioTypeSuffix

`func (o *FolioTypeConfigType) HasFolioTypeSuffix() bool`

HasFolioTypeSuffix returns a boolean if a field has been set.

### GetLastFolioNumber

`func (o *FolioTypeConfigType) GetLastFolioNumber() float32`

GetLastFolioNumber returns the LastFolioNumber field if non-nil, zero value otherwise.

### GetLastFolioNumberOk

`func (o *FolioTypeConfigType) GetLastFolioNumberOk() (*float32, bool)`

GetLastFolioNumberOk returns a tuple with the LastFolioNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastFolioNumber

`func (o *FolioTypeConfigType) SetLastFolioNumber(v float32)`

SetLastFolioNumber sets LastFolioNumber field to given value.

### HasLastFolioNumber

`func (o *FolioTypeConfigType) HasLastFolioNumber() bool`

HasLastFolioNumber returns a boolean if a field has been set.

### GetProFormaFolio

`func (o *FolioTypeConfigType) GetProFormaFolio() bool`

GetProFormaFolio returns the ProFormaFolio field if non-nil, zero value otherwise.

### GetProFormaFolioOk

`func (o *FolioTypeConfigType) GetProFormaFolioOk() (*bool, bool)`

GetProFormaFolioOk returns a tuple with the ProFormaFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProFormaFolio

`func (o *FolioTypeConfigType) SetProFormaFolio(v bool)`

SetProFormaFolio sets ProFormaFolio field to given value.

### HasProFormaFolio

`func (o *FolioTypeConfigType) HasProFormaFolio() bool`

HasProFormaFolio returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


