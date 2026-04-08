# HotelTransactionGeneratesSetupType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AddBaseAmtTo** | Pointer to [**GenerateCalculationBucketsType**](GenerateCalculationBucketsType.md) |  | [optional] 
**Generates** | Pointer to [**[]GenerateType**](GenerateType.md) | Defines the Generate and its Calculation Rules. | [optional] 
**HotelId** | Pointer to **string** | Hotel code. | [optional] 
**TransactionCode** | Pointer to **string** | Transaction code. | [optional] 
**TransactionGroup** | Pointer to **string** | Transaction group. | [optional] 
**TransactionSubGroup** | Pointer to **string** | Transaction sub group. | [optional] 
**TaxInclusive** | Pointer to **bool** | True indicates that the tax is inclusive in the generate. | [optional] 

## Methods

### NewHotelTransactionGeneratesSetupType

`func NewHotelTransactionGeneratesSetupType() *HotelTransactionGeneratesSetupType`

NewHotelTransactionGeneratesSetupType instantiates a new HotelTransactionGeneratesSetupType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelTransactionGeneratesSetupTypeWithDefaults

`func NewHotelTransactionGeneratesSetupTypeWithDefaults() *HotelTransactionGeneratesSetupType`

NewHotelTransactionGeneratesSetupTypeWithDefaults instantiates a new HotelTransactionGeneratesSetupType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddBaseAmtTo

`func (o *HotelTransactionGeneratesSetupType) GetAddBaseAmtTo() GenerateCalculationBucketsType`

GetAddBaseAmtTo returns the AddBaseAmtTo field if non-nil, zero value otherwise.

### GetAddBaseAmtToOk

`func (o *HotelTransactionGeneratesSetupType) GetAddBaseAmtToOk() (*GenerateCalculationBucketsType, bool)`

GetAddBaseAmtToOk returns a tuple with the AddBaseAmtTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddBaseAmtTo

`func (o *HotelTransactionGeneratesSetupType) SetAddBaseAmtTo(v GenerateCalculationBucketsType)`

SetAddBaseAmtTo sets AddBaseAmtTo field to given value.

### HasAddBaseAmtTo

`func (o *HotelTransactionGeneratesSetupType) HasAddBaseAmtTo() bool`

HasAddBaseAmtTo returns a boolean if a field has been set.

### GetGenerates

`func (o *HotelTransactionGeneratesSetupType) GetGenerates() []GenerateType`

GetGenerates returns the Generates field if non-nil, zero value otherwise.

### GetGeneratesOk

`func (o *HotelTransactionGeneratesSetupType) GetGeneratesOk() (*[]GenerateType, bool)`

GetGeneratesOk returns a tuple with the Generates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGenerates

`func (o *HotelTransactionGeneratesSetupType) SetGenerates(v []GenerateType)`

SetGenerates sets Generates field to given value.

### HasGenerates

`func (o *HotelTransactionGeneratesSetupType) HasGenerates() bool`

HasGenerates returns a boolean if a field has been set.

### GetHotelId

`func (o *HotelTransactionGeneratesSetupType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *HotelTransactionGeneratesSetupType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *HotelTransactionGeneratesSetupType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *HotelTransactionGeneratesSetupType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetTransactionCode

`func (o *HotelTransactionGeneratesSetupType) GetTransactionCode() string`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *HotelTransactionGeneratesSetupType) GetTransactionCodeOk() (*string, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *HotelTransactionGeneratesSetupType) SetTransactionCode(v string)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *HotelTransactionGeneratesSetupType) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.

### GetTransactionGroup

`func (o *HotelTransactionGeneratesSetupType) GetTransactionGroup() string`

GetTransactionGroup returns the TransactionGroup field if non-nil, zero value otherwise.

### GetTransactionGroupOk

`func (o *HotelTransactionGeneratesSetupType) GetTransactionGroupOk() (*string, bool)`

GetTransactionGroupOk returns a tuple with the TransactionGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionGroup

`func (o *HotelTransactionGeneratesSetupType) SetTransactionGroup(v string)`

SetTransactionGroup sets TransactionGroup field to given value.

### HasTransactionGroup

`func (o *HotelTransactionGeneratesSetupType) HasTransactionGroup() bool`

HasTransactionGroup returns a boolean if a field has been set.

### GetTransactionSubGroup

`func (o *HotelTransactionGeneratesSetupType) GetTransactionSubGroup() string`

GetTransactionSubGroup returns the TransactionSubGroup field if non-nil, zero value otherwise.

### GetTransactionSubGroupOk

`func (o *HotelTransactionGeneratesSetupType) GetTransactionSubGroupOk() (*string, bool)`

GetTransactionSubGroupOk returns a tuple with the TransactionSubGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionSubGroup

`func (o *HotelTransactionGeneratesSetupType) SetTransactionSubGroup(v string)`

SetTransactionSubGroup sets TransactionSubGroup field to given value.

### HasTransactionSubGroup

`func (o *HotelTransactionGeneratesSetupType) HasTransactionSubGroup() bool`

HasTransactionSubGroup returns a boolean if a field has been set.

### GetTaxInclusive

`func (o *HotelTransactionGeneratesSetupType) GetTaxInclusive() bool`

GetTaxInclusive returns the TaxInclusive field if non-nil, zero value otherwise.

### GetTaxInclusiveOk

`func (o *HotelTransactionGeneratesSetupType) GetTaxInclusiveOk() (*bool, bool)`

GetTaxInclusiveOk returns a tuple with the TaxInclusive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxInclusive

`func (o *HotelTransactionGeneratesSetupType) SetTaxInclusive(v bool)`

SetTaxInclusive sets TaxInclusive field to given value.

### HasTaxInclusive

`func (o *HotelTransactionGeneratesSetupType) HasTaxInclusive() bool`

HasTaxInclusive returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


