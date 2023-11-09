# ExternalProfileSummaryTypeFormerName

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Family name, last name or Company Name. | [optional] 
**FullName** | Pointer to **string** | Full display Name. | [optional] 
**NamePrefix** | Pointer to **string** | Salutation of honorific (e.g. Mr., Mrs., Ms., Miss, Dr.) | [optional] 
**GivenName** | Pointer to **string** | Given name, first name or names. | [optional] 
**MiddleName** | Pointer to **string** | The middle name of the person name. | [optional] 
**NameSuffix** | Pointer to **string** | Hold various name suffixes and letters (e.g. Jr., Sr., III, Ret., Esq.) | [optional] 
**NameTitle** | Pointer to **string** | Degree or honors (e.g., Ph.D., M.D.) | [optional] 
**NameType** | Pointer to [**PersonNameTypeType**](PersonNameTypeType.md) |  | [optional] 
**Gender** | Pointer to **string** | Identifies the profile gender code selected from Gender types List of values. Gender types LOV provides the values configured at gender configuration. | [optional] 
**BirthDate** | Pointer to **string** | Indicates the date of birth as indicated in the document, in ISO 8601 prescribed format. | [optional] 
**BirthDateMasked** | Pointer to **string** | Indicates the date of birth as masked. | [optional] 
**CurrencyCode** | Pointer to **string** | The code specifying a monetary unit. Use ISO 4217, three alpha code. | [optional] 
**CurrencySymbol** | Pointer to **string** | The symbol for the currency, e.g, for currencyCode USD the symbol is $. | [optional] 
**DecimalPlaces** | Pointer to **int32** | Indicates the number of decimal places for a particular currency. This is equivalent to the ISO 4217 standard \&quot;minor unit\&quot;. Typically used when the amount provided includes the minor unit of currency without a decimal point (e.g., USD 8500 needs DecimalPlaces&#x3D;\&quot;2\&quot; to represent $85). | [optional] 
**Language** | Pointer to **string** | Language identification. | [optional] 
**CustomerValue** | Pointer to **string** | The supplier&#39;s ranking of the customer (e.g., VIP, numerical ranking). | [optional] 

## Methods

### NewExternalProfileSummaryTypeFormerName

`func NewExternalProfileSummaryTypeFormerName() *ExternalProfileSummaryTypeFormerName`

NewExternalProfileSummaryTypeFormerName instantiates a new ExternalProfileSummaryTypeFormerName object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExternalProfileSummaryTypeFormerNameWithDefaults

`func NewExternalProfileSummaryTypeFormerNameWithDefaults() *ExternalProfileSummaryTypeFormerName`

NewExternalProfileSummaryTypeFormerNameWithDefaults instantiates a new ExternalProfileSummaryTypeFormerName object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ExternalProfileSummaryTypeFormerName) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ExternalProfileSummaryTypeFormerName) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ExternalProfileSummaryTypeFormerName) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ExternalProfileSummaryTypeFormerName) HasName() bool`

HasName returns a boolean if a field has been set.

### GetFullName

`func (o *ExternalProfileSummaryTypeFormerName) GetFullName() string`

GetFullName returns the FullName field if non-nil, zero value otherwise.

### GetFullNameOk

`func (o *ExternalProfileSummaryTypeFormerName) GetFullNameOk() (*string, bool)`

GetFullNameOk returns a tuple with the FullName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullName

`func (o *ExternalProfileSummaryTypeFormerName) SetFullName(v string)`

SetFullName sets FullName field to given value.

### HasFullName

`func (o *ExternalProfileSummaryTypeFormerName) HasFullName() bool`

HasFullName returns a boolean if a field has been set.

### GetNamePrefix

`func (o *ExternalProfileSummaryTypeFormerName) GetNamePrefix() string`

GetNamePrefix returns the NamePrefix field if non-nil, zero value otherwise.

### GetNamePrefixOk

`func (o *ExternalProfileSummaryTypeFormerName) GetNamePrefixOk() (*string, bool)`

GetNamePrefixOk returns a tuple with the NamePrefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNamePrefix

`func (o *ExternalProfileSummaryTypeFormerName) SetNamePrefix(v string)`

SetNamePrefix sets NamePrefix field to given value.

### HasNamePrefix

`func (o *ExternalProfileSummaryTypeFormerName) HasNamePrefix() bool`

HasNamePrefix returns a boolean if a field has been set.

### GetGivenName

`func (o *ExternalProfileSummaryTypeFormerName) GetGivenName() string`

GetGivenName returns the GivenName field if non-nil, zero value otherwise.

### GetGivenNameOk

`func (o *ExternalProfileSummaryTypeFormerName) GetGivenNameOk() (*string, bool)`

GetGivenNameOk returns a tuple with the GivenName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGivenName

`func (o *ExternalProfileSummaryTypeFormerName) SetGivenName(v string)`

SetGivenName sets GivenName field to given value.

### HasGivenName

`func (o *ExternalProfileSummaryTypeFormerName) HasGivenName() bool`

HasGivenName returns a boolean if a field has been set.

### GetMiddleName

`func (o *ExternalProfileSummaryTypeFormerName) GetMiddleName() string`

GetMiddleName returns the MiddleName field if non-nil, zero value otherwise.

### GetMiddleNameOk

`func (o *ExternalProfileSummaryTypeFormerName) GetMiddleNameOk() (*string, bool)`

GetMiddleNameOk returns a tuple with the MiddleName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMiddleName

`func (o *ExternalProfileSummaryTypeFormerName) SetMiddleName(v string)`

SetMiddleName sets MiddleName field to given value.

### HasMiddleName

`func (o *ExternalProfileSummaryTypeFormerName) HasMiddleName() bool`

HasMiddleName returns a boolean if a field has been set.

### GetNameSuffix

`func (o *ExternalProfileSummaryTypeFormerName) GetNameSuffix() string`

GetNameSuffix returns the NameSuffix field if non-nil, zero value otherwise.

### GetNameSuffixOk

`func (o *ExternalProfileSummaryTypeFormerName) GetNameSuffixOk() (*string, bool)`

GetNameSuffixOk returns a tuple with the NameSuffix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameSuffix

`func (o *ExternalProfileSummaryTypeFormerName) SetNameSuffix(v string)`

SetNameSuffix sets NameSuffix field to given value.

### HasNameSuffix

`func (o *ExternalProfileSummaryTypeFormerName) HasNameSuffix() bool`

HasNameSuffix returns a boolean if a field has been set.

### GetNameTitle

`func (o *ExternalProfileSummaryTypeFormerName) GetNameTitle() string`

GetNameTitle returns the NameTitle field if non-nil, zero value otherwise.

### GetNameTitleOk

`func (o *ExternalProfileSummaryTypeFormerName) GetNameTitleOk() (*string, bool)`

GetNameTitleOk returns a tuple with the NameTitle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameTitle

`func (o *ExternalProfileSummaryTypeFormerName) SetNameTitle(v string)`

SetNameTitle sets NameTitle field to given value.

### HasNameTitle

`func (o *ExternalProfileSummaryTypeFormerName) HasNameTitle() bool`

HasNameTitle returns a boolean if a field has been set.

### GetNameType

`func (o *ExternalProfileSummaryTypeFormerName) GetNameType() PersonNameTypeType`

GetNameType returns the NameType field if non-nil, zero value otherwise.

### GetNameTypeOk

`func (o *ExternalProfileSummaryTypeFormerName) GetNameTypeOk() (*PersonNameTypeType, bool)`

GetNameTypeOk returns a tuple with the NameType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameType

`func (o *ExternalProfileSummaryTypeFormerName) SetNameType(v PersonNameTypeType)`

SetNameType sets NameType field to given value.

### HasNameType

`func (o *ExternalProfileSummaryTypeFormerName) HasNameType() bool`

HasNameType returns a boolean if a field has been set.

### GetGender

`func (o *ExternalProfileSummaryTypeFormerName) GetGender() string`

GetGender returns the Gender field if non-nil, zero value otherwise.

### GetGenderOk

`func (o *ExternalProfileSummaryTypeFormerName) GetGenderOk() (*string, bool)`

GetGenderOk returns a tuple with the Gender field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGender

`func (o *ExternalProfileSummaryTypeFormerName) SetGender(v string)`

SetGender sets Gender field to given value.

### HasGender

`func (o *ExternalProfileSummaryTypeFormerName) HasGender() bool`

HasGender returns a boolean if a field has been set.

### GetBirthDate

`func (o *ExternalProfileSummaryTypeFormerName) GetBirthDate() string`

GetBirthDate returns the BirthDate field if non-nil, zero value otherwise.

### GetBirthDateOk

`func (o *ExternalProfileSummaryTypeFormerName) GetBirthDateOk() (*string, bool)`

GetBirthDateOk returns a tuple with the BirthDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBirthDate

`func (o *ExternalProfileSummaryTypeFormerName) SetBirthDate(v string)`

SetBirthDate sets BirthDate field to given value.

### HasBirthDate

`func (o *ExternalProfileSummaryTypeFormerName) HasBirthDate() bool`

HasBirthDate returns a boolean if a field has been set.

### GetBirthDateMasked

`func (o *ExternalProfileSummaryTypeFormerName) GetBirthDateMasked() string`

GetBirthDateMasked returns the BirthDateMasked field if non-nil, zero value otherwise.

### GetBirthDateMaskedOk

`func (o *ExternalProfileSummaryTypeFormerName) GetBirthDateMaskedOk() (*string, bool)`

GetBirthDateMaskedOk returns a tuple with the BirthDateMasked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBirthDateMasked

`func (o *ExternalProfileSummaryTypeFormerName) SetBirthDateMasked(v string)`

SetBirthDateMasked sets BirthDateMasked field to given value.

### HasBirthDateMasked

`func (o *ExternalProfileSummaryTypeFormerName) HasBirthDateMasked() bool`

HasBirthDateMasked returns a boolean if a field has been set.

### GetCurrencyCode

`func (o *ExternalProfileSummaryTypeFormerName) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *ExternalProfileSummaryTypeFormerName) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *ExternalProfileSummaryTypeFormerName) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *ExternalProfileSummaryTypeFormerName) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetCurrencySymbol

`func (o *ExternalProfileSummaryTypeFormerName) GetCurrencySymbol() string`

GetCurrencySymbol returns the CurrencySymbol field if non-nil, zero value otherwise.

### GetCurrencySymbolOk

`func (o *ExternalProfileSummaryTypeFormerName) GetCurrencySymbolOk() (*string, bool)`

GetCurrencySymbolOk returns a tuple with the CurrencySymbol field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencySymbol

`func (o *ExternalProfileSummaryTypeFormerName) SetCurrencySymbol(v string)`

SetCurrencySymbol sets CurrencySymbol field to given value.

### HasCurrencySymbol

`func (o *ExternalProfileSummaryTypeFormerName) HasCurrencySymbol() bool`

HasCurrencySymbol returns a boolean if a field has been set.

### GetDecimalPlaces

`func (o *ExternalProfileSummaryTypeFormerName) GetDecimalPlaces() int32`

GetDecimalPlaces returns the DecimalPlaces field if non-nil, zero value otherwise.

### GetDecimalPlacesOk

`func (o *ExternalProfileSummaryTypeFormerName) GetDecimalPlacesOk() (*int32, bool)`

GetDecimalPlacesOk returns a tuple with the DecimalPlaces field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecimalPlaces

`func (o *ExternalProfileSummaryTypeFormerName) SetDecimalPlaces(v int32)`

SetDecimalPlaces sets DecimalPlaces field to given value.

### HasDecimalPlaces

`func (o *ExternalProfileSummaryTypeFormerName) HasDecimalPlaces() bool`

HasDecimalPlaces returns a boolean if a field has been set.

### GetLanguage

`func (o *ExternalProfileSummaryTypeFormerName) GetLanguage() string`

GetLanguage returns the Language field if non-nil, zero value otherwise.

### GetLanguageOk

`func (o *ExternalProfileSummaryTypeFormerName) GetLanguageOk() (*string, bool)`

GetLanguageOk returns a tuple with the Language field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLanguage

`func (o *ExternalProfileSummaryTypeFormerName) SetLanguage(v string)`

SetLanguage sets Language field to given value.

### HasLanguage

`func (o *ExternalProfileSummaryTypeFormerName) HasLanguage() bool`

HasLanguage returns a boolean if a field has been set.

### GetCustomerValue

`func (o *ExternalProfileSummaryTypeFormerName) GetCustomerValue() string`

GetCustomerValue returns the CustomerValue field if non-nil, zero value otherwise.

### GetCustomerValueOk

`func (o *ExternalProfileSummaryTypeFormerName) GetCustomerValueOk() (*string, bool)`

GetCustomerValueOk returns a tuple with the CustomerValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerValue

`func (o *ExternalProfileSummaryTypeFormerName) SetCustomerValue(v string)`

SetCustomerValue sets CustomerValue field to given value.

### HasCustomerValue

`func (o *ExternalProfileSummaryTypeFormerName) HasCustomerValue() bool`

HasCustomerValue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


