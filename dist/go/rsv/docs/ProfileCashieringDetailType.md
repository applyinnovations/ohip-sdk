# ProfileCashieringDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PaymentMethod** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**RoutingInstructions** | Pointer to [**ProfileRoutingInstructionsType**](ProfileRoutingInstructionsType.md) |  | [optional] 
**TaxType** | Pointer to **string** | Tax type code. | [optional] 
**FiscalGuestType** | Pointer to **string** | Guest type code. | [optional] 
**HotelId** | Pointer to **string** | Hotel Code for which the routing instructions are provided for a profile. | [optional] 

## Methods

### NewProfileCashieringDetailType

`func NewProfileCashieringDetailType() *ProfileCashieringDetailType`

NewProfileCashieringDetailType instantiates a new ProfileCashieringDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileCashieringDetailTypeWithDefaults

`func NewProfileCashieringDetailTypeWithDefaults() *ProfileCashieringDetailType`

NewProfileCashieringDetailTypeWithDefaults instantiates a new ProfileCashieringDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPaymentMethod

`func (o *ProfileCashieringDetailType) GetPaymentMethod() CodeDescriptionType`

GetPaymentMethod returns the PaymentMethod field if non-nil, zero value otherwise.

### GetPaymentMethodOk

`func (o *ProfileCashieringDetailType) GetPaymentMethodOk() (*CodeDescriptionType, bool)`

GetPaymentMethodOk returns a tuple with the PaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethod

`func (o *ProfileCashieringDetailType) SetPaymentMethod(v CodeDescriptionType)`

SetPaymentMethod sets PaymentMethod field to given value.

### HasPaymentMethod

`func (o *ProfileCashieringDetailType) HasPaymentMethod() bool`

HasPaymentMethod returns a boolean if a field has been set.

### GetRoutingInstructions

`func (o *ProfileCashieringDetailType) GetRoutingInstructions() ProfileRoutingInstructionsType`

GetRoutingInstructions returns the RoutingInstructions field if non-nil, zero value otherwise.

### GetRoutingInstructionsOk

`func (o *ProfileCashieringDetailType) GetRoutingInstructionsOk() (*ProfileRoutingInstructionsType, bool)`

GetRoutingInstructionsOk returns a tuple with the RoutingInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoutingInstructions

`func (o *ProfileCashieringDetailType) SetRoutingInstructions(v ProfileRoutingInstructionsType)`

SetRoutingInstructions sets RoutingInstructions field to given value.

### HasRoutingInstructions

`func (o *ProfileCashieringDetailType) HasRoutingInstructions() bool`

HasRoutingInstructions returns a boolean if a field has been set.

### GetTaxType

`func (o *ProfileCashieringDetailType) GetTaxType() string`

GetTaxType returns the TaxType field if non-nil, zero value otherwise.

### GetTaxTypeOk

`func (o *ProfileCashieringDetailType) GetTaxTypeOk() (*string, bool)`

GetTaxTypeOk returns a tuple with the TaxType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxType

`func (o *ProfileCashieringDetailType) SetTaxType(v string)`

SetTaxType sets TaxType field to given value.

### HasTaxType

`func (o *ProfileCashieringDetailType) HasTaxType() bool`

HasTaxType returns a boolean if a field has been set.

### GetFiscalGuestType

`func (o *ProfileCashieringDetailType) GetFiscalGuestType() string`

GetFiscalGuestType returns the FiscalGuestType field if non-nil, zero value otherwise.

### GetFiscalGuestTypeOk

`func (o *ProfileCashieringDetailType) GetFiscalGuestTypeOk() (*string, bool)`

GetFiscalGuestTypeOk returns a tuple with the FiscalGuestType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalGuestType

`func (o *ProfileCashieringDetailType) SetFiscalGuestType(v string)`

SetFiscalGuestType sets FiscalGuestType field to given value.

### HasFiscalGuestType

`func (o *ProfileCashieringDetailType) HasFiscalGuestType() bool`

HasFiscalGuestType returns a boolean if a field has been set.

### GetHotelId

`func (o *ProfileCashieringDetailType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ProfileCashieringDetailType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ProfileCashieringDetailType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ProfileCashieringDetailType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


