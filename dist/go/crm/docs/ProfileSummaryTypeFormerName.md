# ProfileSummaryTypeFormerName

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

### NewProfileSummaryTypeFormerName

`func NewProfileSummaryTypeFormerName() *ProfileSummaryTypeFormerName`

NewProfileSummaryTypeFormerName instantiates a new ProfileSummaryTypeFormerName object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileSummaryTypeFormerNameWithDefaults

`func NewProfileSummaryTypeFormerNameWithDefaults() *ProfileSummaryTypeFormerName`

NewProfileSummaryTypeFormerNameWithDefaults instantiates a new ProfileSummaryTypeFormerName object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ProfileSummaryTypeFormerName) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ProfileSummaryTypeFormerName) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ProfileSummaryTypeFormerName) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ProfileSummaryTypeFormerName) HasName() bool`

HasName returns a boolean if a field has been set.

### GetFullName

`func (o *ProfileSummaryTypeFormerName) GetFullName() string`

GetFullName returns the FullName field if non-nil, zero value otherwise.

### GetFullNameOk

`func (o *ProfileSummaryTypeFormerName) GetFullNameOk() (*string, bool)`

GetFullNameOk returns a tuple with the FullName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullName

`func (o *ProfileSummaryTypeFormerName) SetFullName(v string)`

SetFullName sets FullName field to given value.

### HasFullName

`func (o *ProfileSummaryTypeFormerName) HasFullName() bool`

HasFullName returns a boolean if a field has been set.

### GetNamePrefix

`func (o *ProfileSummaryTypeFormerName) GetNamePrefix() string`

GetNamePrefix returns the NamePrefix field if non-nil, zero value otherwise.

### GetNamePrefixOk

`func (o *ProfileSummaryTypeFormerName) GetNamePrefixOk() (*string, bool)`

GetNamePrefixOk returns a tuple with the NamePrefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNamePrefix

`func (o *ProfileSummaryTypeFormerName) SetNamePrefix(v string)`

SetNamePrefix sets NamePrefix field to given value.

### HasNamePrefix

`func (o *ProfileSummaryTypeFormerName) HasNamePrefix() bool`

HasNamePrefix returns a boolean if a field has been set.

### GetGivenName

`func (o *ProfileSummaryTypeFormerName) GetGivenName() string`

GetGivenName returns the GivenName field if non-nil, zero value otherwise.

### GetGivenNameOk

`func (o *ProfileSummaryTypeFormerName) GetGivenNameOk() (*string, bool)`

GetGivenNameOk returns a tuple with the GivenName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGivenName

`func (o *ProfileSummaryTypeFormerName) SetGivenName(v string)`

SetGivenName sets GivenName field to given value.

### HasGivenName

`func (o *ProfileSummaryTypeFormerName) HasGivenName() bool`

HasGivenName returns a boolean if a field has been set.

### GetMiddleName

`func (o *ProfileSummaryTypeFormerName) GetMiddleName() string`

GetMiddleName returns the MiddleName field if non-nil, zero value otherwise.

### GetMiddleNameOk

`func (o *ProfileSummaryTypeFormerName) GetMiddleNameOk() (*string, bool)`

GetMiddleNameOk returns a tuple with the MiddleName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMiddleName

`func (o *ProfileSummaryTypeFormerName) SetMiddleName(v string)`

SetMiddleName sets MiddleName field to given value.

### HasMiddleName

`func (o *ProfileSummaryTypeFormerName) HasMiddleName() bool`

HasMiddleName returns a boolean if a field has been set.

### GetNameSuffix

`func (o *ProfileSummaryTypeFormerName) GetNameSuffix() string`

GetNameSuffix returns the NameSuffix field if non-nil, zero value otherwise.

### GetNameSuffixOk

`func (o *ProfileSummaryTypeFormerName) GetNameSuffixOk() (*string, bool)`

GetNameSuffixOk returns a tuple with the NameSuffix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameSuffix

`func (o *ProfileSummaryTypeFormerName) SetNameSuffix(v string)`

SetNameSuffix sets NameSuffix field to given value.

### HasNameSuffix

`func (o *ProfileSummaryTypeFormerName) HasNameSuffix() bool`

HasNameSuffix returns a boolean if a field has been set.

### GetNameTitle

`func (o *ProfileSummaryTypeFormerName) GetNameTitle() string`

GetNameTitle returns the NameTitle field if non-nil, zero value otherwise.

### GetNameTitleOk

`func (o *ProfileSummaryTypeFormerName) GetNameTitleOk() (*string, bool)`

GetNameTitleOk returns a tuple with the NameTitle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameTitle

`func (o *ProfileSummaryTypeFormerName) SetNameTitle(v string)`

SetNameTitle sets NameTitle field to given value.

### HasNameTitle

`func (o *ProfileSummaryTypeFormerName) HasNameTitle() bool`

HasNameTitle returns a boolean if a field has been set.

### GetNameType

`func (o *ProfileSummaryTypeFormerName) GetNameType() PersonNameTypeType`

GetNameType returns the NameType field if non-nil, zero value otherwise.

### GetNameTypeOk

`func (o *ProfileSummaryTypeFormerName) GetNameTypeOk() (*PersonNameTypeType, bool)`

GetNameTypeOk returns a tuple with the NameType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameType

`func (o *ProfileSummaryTypeFormerName) SetNameType(v PersonNameTypeType)`

SetNameType sets NameType field to given value.

### HasNameType

`func (o *ProfileSummaryTypeFormerName) HasNameType() bool`

HasNameType returns a boolean if a field has been set.

### GetGender

`func (o *ProfileSummaryTypeFormerName) GetGender() string`

GetGender returns the Gender field if non-nil, zero value otherwise.

### GetGenderOk

`func (o *ProfileSummaryTypeFormerName) GetGenderOk() (*string, bool)`

GetGenderOk returns a tuple with the Gender field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGender

`func (o *ProfileSummaryTypeFormerName) SetGender(v string)`

SetGender sets Gender field to given value.

### HasGender

`func (o *ProfileSummaryTypeFormerName) HasGender() bool`

HasGender returns a boolean if a field has been set.

### GetBirthDate

`func (o *ProfileSummaryTypeFormerName) GetBirthDate() string`

GetBirthDate returns the BirthDate field if non-nil, zero value otherwise.

### GetBirthDateOk

`func (o *ProfileSummaryTypeFormerName) GetBirthDateOk() (*string, bool)`

GetBirthDateOk returns a tuple with the BirthDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBirthDate

`func (o *ProfileSummaryTypeFormerName) SetBirthDate(v string)`

SetBirthDate sets BirthDate field to given value.

### HasBirthDate

`func (o *ProfileSummaryTypeFormerName) HasBirthDate() bool`

HasBirthDate returns a boolean if a field has been set.

### GetBirthDateMasked

`func (o *ProfileSummaryTypeFormerName) GetBirthDateMasked() string`

GetBirthDateMasked returns the BirthDateMasked field if non-nil, zero value otherwise.

### GetBirthDateMaskedOk

`func (o *ProfileSummaryTypeFormerName) GetBirthDateMaskedOk() (*string, bool)`

GetBirthDateMaskedOk returns a tuple with the BirthDateMasked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBirthDateMasked

`func (o *ProfileSummaryTypeFormerName) SetBirthDateMasked(v string)`

SetBirthDateMasked sets BirthDateMasked field to given value.

### HasBirthDateMasked

`func (o *ProfileSummaryTypeFormerName) HasBirthDateMasked() bool`

HasBirthDateMasked returns a boolean if a field has been set.

### GetCurrencyCode

`func (o *ProfileSummaryTypeFormerName) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *ProfileSummaryTypeFormerName) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *ProfileSummaryTypeFormerName) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *ProfileSummaryTypeFormerName) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetCurrencySymbol

`func (o *ProfileSummaryTypeFormerName) GetCurrencySymbol() string`

GetCurrencySymbol returns the CurrencySymbol field if non-nil, zero value otherwise.

### GetCurrencySymbolOk

`func (o *ProfileSummaryTypeFormerName) GetCurrencySymbolOk() (*string, bool)`

GetCurrencySymbolOk returns a tuple with the CurrencySymbol field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencySymbol

`func (o *ProfileSummaryTypeFormerName) SetCurrencySymbol(v string)`

SetCurrencySymbol sets CurrencySymbol field to given value.

### HasCurrencySymbol

`func (o *ProfileSummaryTypeFormerName) HasCurrencySymbol() bool`

HasCurrencySymbol returns a boolean if a field has been set.

### GetDecimalPlaces

`func (o *ProfileSummaryTypeFormerName) GetDecimalPlaces() int32`

GetDecimalPlaces returns the DecimalPlaces field if non-nil, zero value otherwise.

### GetDecimalPlacesOk

`func (o *ProfileSummaryTypeFormerName) GetDecimalPlacesOk() (*int32, bool)`

GetDecimalPlacesOk returns a tuple with the DecimalPlaces field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecimalPlaces

`func (o *ProfileSummaryTypeFormerName) SetDecimalPlaces(v int32)`

SetDecimalPlaces sets DecimalPlaces field to given value.

### HasDecimalPlaces

`func (o *ProfileSummaryTypeFormerName) HasDecimalPlaces() bool`

HasDecimalPlaces returns a boolean if a field has been set.

### GetLanguage

`func (o *ProfileSummaryTypeFormerName) GetLanguage() string`

GetLanguage returns the Language field if non-nil, zero value otherwise.

### GetLanguageOk

`func (o *ProfileSummaryTypeFormerName) GetLanguageOk() (*string, bool)`

GetLanguageOk returns a tuple with the Language field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLanguage

`func (o *ProfileSummaryTypeFormerName) SetLanguage(v string)`

SetLanguage sets Language field to given value.

### HasLanguage

`func (o *ProfileSummaryTypeFormerName) HasLanguage() bool`

HasLanguage returns a boolean if a field has been set.

### GetCustomerValue

`func (o *ProfileSummaryTypeFormerName) GetCustomerValue() string`

GetCustomerValue returns the CustomerValue field if non-nil, zero value otherwise.

### GetCustomerValueOk

`func (o *ProfileSummaryTypeFormerName) GetCustomerValueOk() (*string, bool)`

GetCustomerValueOk returns a tuple with the CustomerValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerValue

`func (o *ProfileSummaryTypeFormerName) SetCustomerValue(v string)`

SetCustomerValue sets CustomerValue field to given value.

### HasCustomerValue

`func (o *ProfileSummaryTypeFormerName) HasCustomerValue() bool`

HasCustomerValue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


