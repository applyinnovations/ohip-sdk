# CollectingAgentTaxType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CalculatedOnArrangementCodes** | Pointer to [**[]CodeDescriptionType**](CodeDescriptionType.md) | Collection of Arrangement Codes based on which the Collecting Agent Tax will be calculated. | [optional] 
**CalculatedOnTransactionCodes** | Pointer to [**[]CodeDescriptionType**](CodeDescriptionType.md) | Collection of Transaction Codes based on which the Collecting Agent Tax will be calculated. | [optional] 
**HotelId** | Pointer to **string** | It represents Hotel code | [optional] 
**NewTaxType** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 
**Percentage** | Pointer to **int32** | Percentage used to calculate the Taxes | [optional] 
**TaxCode** | Pointer to **int32** | Primary Key Sequence. | [optional] 
**TaxTransactionCode** | Pointer to **string** | The Transaction Code used to post the Taxes. | [optional] 
**TaxType** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 
**TaxVoid** | Pointer to **int32** | Primary Key Sequence. | [optional] 
**TriggerAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 

## Methods

### NewCollectingAgentTaxType

`func NewCollectingAgentTaxType() *CollectingAgentTaxType`

NewCollectingAgentTaxType instantiates a new CollectingAgentTaxType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCollectingAgentTaxTypeWithDefaults

`func NewCollectingAgentTaxTypeWithDefaults() *CollectingAgentTaxType`

NewCollectingAgentTaxTypeWithDefaults instantiates a new CollectingAgentTaxType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCalculatedOnArrangementCodes

`func (o *CollectingAgentTaxType) GetCalculatedOnArrangementCodes() []CodeDescriptionType`

GetCalculatedOnArrangementCodes returns the CalculatedOnArrangementCodes field if non-nil, zero value otherwise.

### GetCalculatedOnArrangementCodesOk

`func (o *CollectingAgentTaxType) GetCalculatedOnArrangementCodesOk() (*[]CodeDescriptionType, bool)`

GetCalculatedOnArrangementCodesOk returns a tuple with the CalculatedOnArrangementCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCalculatedOnArrangementCodes

`func (o *CollectingAgentTaxType) SetCalculatedOnArrangementCodes(v []CodeDescriptionType)`

SetCalculatedOnArrangementCodes sets CalculatedOnArrangementCodes field to given value.

### HasCalculatedOnArrangementCodes

`func (o *CollectingAgentTaxType) HasCalculatedOnArrangementCodes() bool`

HasCalculatedOnArrangementCodes returns a boolean if a field has been set.

### GetCalculatedOnTransactionCodes

`func (o *CollectingAgentTaxType) GetCalculatedOnTransactionCodes() []CodeDescriptionType`

GetCalculatedOnTransactionCodes returns the CalculatedOnTransactionCodes field if non-nil, zero value otherwise.

### GetCalculatedOnTransactionCodesOk

`func (o *CollectingAgentTaxType) GetCalculatedOnTransactionCodesOk() (*[]CodeDescriptionType, bool)`

GetCalculatedOnTransactionCodesOk returns a tuple with the CalculatedOnTransactionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCalculatedOnTransactionCodes

`func (o *CollectingAgentTaxType) SetCalculatedOnTransactionCodes(v []CodeDescriptionType)`

SetCalculatedOnTransactionCodes sets CalculatedOnTransactionCodes field to given value.

### HasCalculatedOnTransactionCodes

`func (o *CollectingAgentTaxType) HasCalculatedOnTransactionCodes() bool`

HasCalculatedOnTransactionCodes returns a boolean if a field has been set.

### GetHotelId

`func (o *CollectingAgentTaxType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CollectingAgentTaxType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CollectingAgentTaxType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CollectingAgentTaxType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetNewTaxType

`func (o *CollectingAgentTaxType) GetNewTaxType() CodeListType`

GetNewTaxType returns the NewTaxType field if non-nil, zero value otherwise.

### GetNewTaxTypeOk

`func (o *CollectingAgentTaxType) GetNewTaxTypeOk() (*CodeListType, bool)`

GetNewTaxTypeOk returns a tuple with the NewTaxType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewTaxType

`func (o *CollectingAgentTaxType) SetNewTaxType(v CodeListType)`

SetNewTaxType sets NewTaxType field to given value.

### HasNewTaxType

`func (o *CollectingAgentTaxType) HasNewTaxType() bool`

HasNewTaxType returns a boolean if a field has been set.

### GetPercentage

`func (o *CollectingAgentTaxType) GetPercentage() int32`

GetPercentage returns the Percentage field if non-nil, zero value otherwise.

### GetPercentageOk

`func (o *CollectingAgentTaxType) GetPercentageOk() (*int32, bool)`

GetPercentageOk returns a tuple with the Percentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentage

`func (o *CollectingAgentTaxType) SetPercentage(v int32)`

SetPercentage sets Percentage field to given value.

### HasPercentage

`func (o *CollectingAgentTaxType) HasPercentage() bool`

HasPercentage returns a boolean if a field has been set.

### GetTaxCode

`func (o *CollectingAgentTaxType) GetTaxCode() int32`

GetTaxCode returns the TaxCode field if non-nil, zero value otherwise.

### GetTaxCodeOk

`func (o *CollectingAgentTaxType) GetTaxCodeOk() (*int32, bool)`

GetTaxCodeOk returns a tuple with the TaxCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxCode

`func (o *CollectingAgentTaxType) SetTaxCode(v int32)`

SetTaxCode sets TaxCode field to given value.

### HasTaxCode

`func (o *CollectingAgentTaxType) HasTaxCode() bool`

HasTaxCode returns a boolean if a field has been set.

### GetTaxTransactionCode

`func (o *CollectingAgentTaxType) GetTaxTransactionCode() string`

GetTaxTransactionCode returns the TaxTransactionCode field if non-nil, zero value otherwise.

### GetTaxTransactionCodeOk

`func (o *CollectingAgentTaxType) GetTaxTransactionCodeOk() (*string, bool)`

GetTaxTransactionCodeOk returns a tuple with the TaxTransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxTransactionCode

`func (o *CollectingAgentTaxType) SetTaxTransactionCode(v string)`

SetTaxTransactionCode sets TaxTransactionCode field to given value.

### HasTaxTransactionCode

`func (o *CollectingAgentTaxType) HasTaxTransactionCode() bool`

HasTaxTransactionCode returns a boolean if a field has been set.

### GetTaxType

`func (o *CollectingAgentTaxType) GetTaxType() CodeListType`

GetTaxType returns the TaxType field if non-nil, zero value otherwise.

### GetTaxTypeOk

`func (o *CollectingAgentTaxType) GetTaxTypeOk() (*CodeListType, bool)`

GetTaxTypeOk returns a tuple with the TaxType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxType

`func (o *CollectingAgentTaxType) SetTaxType(v CodeListType)`

SetTaxType sets TaxType field to given value.

### HasTaxType

`func (o *CollectingAgentTaxType) HasTaxType() bool`

HasTaxType returns a boolean if a field has been set.

### GetTaxVoid

`func (o *CollectingAgentTaxType) GetTaxVoid() int32`

GetTaxVoid returns the TaxVoid field if non-nil, zero value otherwise.

### GetTaxVoidOk

`func (o *CollectingAgentTaxType) GetTaxVoidOk() (*int32, bool)`

GetTaxVoidOk returns a tuple with the TaxVoid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxVoid

`func (o *CollectingAgentTaxType) SetTaxVoid(v int32)`

SetTaxVoid sets TaxVoid field to given value.

### HasTaxVoid

`func (o *CollectingAgentTaxType) HasTaxVoid() bool`

HasTaxVoid returns a boolean if a field has been set.

### GetTriggerAmount

`func (o *CollectingAgentTaxType) GetTriggerAmount() CurrencyAmountType`

GetTriggerAmount returns the TriggerAmount field if non-nil, zero value otherwise.

### GetTriggerAmountOk

`func (o *CollectingAgentTaxType) GetTriggerAmountOk() (*CurrencyAmountType, bool)`

GetTriggerAmountOk returns a tuple with the TriggerAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTriggerAmount

`func (o *CollectingAgentTaxType) SetTriggerAmount(v CurrencyAmountType)`

SetTriggerAmount sets TriggerAmount field to given value.

### HasTriggerAmount

`func (o *CollectingAgentTaxType) HasTriggerAmount() bool`

HasTriggerAmount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


