# ConvertFolioType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**FolioDate** | Pointer to **string** | Date of folio generation. | [optional] 
**FolioNo** | Pointer to **float32** | Folio number of the Folio which is going to be converted. | [optional] 
**FolioTypeName** | Pointer to **string** | Folio Type of the folio(Example: Ricevuta, Fattura). | [optional] 
**HotelId** | Pointer to **string** | Hotel code where this folio was generated at. | [optional] 

## Methods

### NewConvertFolioType

`func NewConvertFolioType() *ConvertFolioType`

NewConvertFolioType instantiates a new ConvertFolioType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConvertFolioTypeWithDefaults

`func NewConvertFolioTypeWithDefaults() *ConvertFolioType`

NewConvertFolioTypeWithDefaults instantiates a new ConvertFolioType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCashierId

`func (o *ConvertFolioType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *ConvertFolioType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *ConvertFolioType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *ConvertFolioType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetFolioDate

`func (o *ConvertFolioType) GetFolioDate() string`

GetFolioDate returns the FolioDate field if non-nil, zero value otherwise.

### GetFolioDateOk

`func (o *ConvertFolioType) GetFolioDateOk() (*string, bool)`

GetFolioDateOk returns a tuple with the FolioDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioDate

`func (o *ConvertFolioType) SetFolioDate(v string)`

SetFolioDate sets FolioDate field to given value.

### HasFolioDate

`func (o *ConvertFolioType) HasFolioDate() bool`

HasFolioDate returns a boolean if a field has been set.

### GetFolioNo

`func (o *ConvertFolioType) GetFolioNo() float32`

GetFolioNo returns the FolioNo field if non-nil, zero value otherwise.

### GetFolioNoOk

`func (o *ConvertFolioType) GetFolioNoOk() (*float32, bool)`

GetFolioNoOk returns a tuple with the FolioNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioNo

`func (o *ConvertFolioType) SetFolioNo(v float32)`

SetFolioNo sets FolioNo field to given value.

### HasFolioNo

`func (o *ConvertFolioType) HasFolioNo() bool`

HasFolioNo returns a boolean if a field has been set.

### GetFolioTypeName

`func (o *ConvertFolioType) GetFolioTypeName() string`

GetFolioTypeName returns the FolioTypeName field if non-nil, zero value otherwise.

### GetFolioTypeNameOk

`func (o *ConvertFolioType) GetFolioTypeNameOk() (*string, bool)`

GetFolioTypeNameOk returns a tuple with the FolioTypeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioTypeName

`func (o *ConvertFolioType) SetFolioTypeName(v string)`

SetFolioTypeName sets FolioTypeName field to given value.

### HasFolioTypeName

`func (o *ConvertFolioType) HasFolioTypeName() bool`

HasFolioTypeName returns a boolean if a field has been set.

### GetHotelId

`func (o *ConvertFolioType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ConvertFolioType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ConvertFolioType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ConvertFolioType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


