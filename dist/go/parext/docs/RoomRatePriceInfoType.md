# RoomRatePriceInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AmountAfterTax** | Pointer to **float32** | The total amount including all associated taxes (e.g., sales tax, VAT, GST or any associated tax). | [optional] 
**AmountBeforeTax** | Pointer to **float32** | The total amount not including any associated tax (e.g., sales tax, VAT, GST or any associated tax). | [optional] 
**StayDate** | Pointer to **string** | Stay Date | [optional] 

## Methods

### NewRoomRatePriceInfoType

`func NewRoomRatePriceInfoType() *RoomRatePriceInfoType`

NewRoomRatePriceInfoType instantiates a new RoomRatePriceInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomRatePriceInfoTypeWithDefaults

`func NewRoomRatePriceInfoTypeWithDefaults() *RoomRatePriceInfoType`

NewRoomRatePriceInfoTypeWithDefaults instantiates a new RoomRatePriceInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmountAfterTax

`func (o *RoomRatePriceInfoType) GetAmountAfterTax() float32`

GetAmountAfterTax returns the AmountAfterTax field if non-nil, zero value otherwise.

### GetAmountAfterTaxOk

`func (o *RoomRatePriceInfoType) GetAmountAfterTaxOk() (*float32, bool)`

GetAmountAfterTaxOk returns a tuple with the AmountAfterTax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountAfterTax

`func (o *RoomRatePriceInfoType) SetAmountAfterTax(v float32)`

SetAmountAfterTax sets AmountAfterTax field to given value.

### HasAmountAfterTax

`func (o *RoomRatePriceInfoType) HasAmountAfterTax() bool`

HasAmountAfterTax returns a boolean if a field has been set.

### GetAmountBeforeTax

`func (o *RoomRatePriceInfoType) GetAmountBeforeTax() float32`

GetAmountBeforeTax returns the AmountBeforeTax field if non-nil, zero value otherwise.

### GetAmountBeforeTaxOk

`func (o *RoomRatePriceInfoType) GetAmountBeforeTaxOk() (*float32, bool)`

GetAmountBeforeTaxOk returns a tuple with the AmountBeforeTax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountBeforeTax

`func (o *RoomRatePriceInfoType) SetAmountBeforeTax(v float32)`

SetAmountBeforeTax sets AmountBeforeTax field to given value.

### HasAmountBeforeTax

`func (o *RoomRatePriceInfoType) HasAmountBeforeTax() bool`

HasAmountBeforeTax returns a boolean if a field has been set.

### GetStayDate

`func (o *RoomRatePriceInfoType) GetStayDate() string`

GetStayDate returns the StayDate field if non-nil, zero value otherwise.

### GetStayDateOk

`func (o *RoomRatePriceInfoType) GetStayDateOk() (*string, bool)`

GetStayDateOk returns a tuple with the StayDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayDate

`func (o *RoomRatePriceInfoType) SetStayDate(v string)`

SetStayDate sets StayDate field to given value.

### HasStayDate

`func (o *RoomRatePriceInfoType) HasStayDate() bool`

HasStayDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


