# HotelTransactionCode

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TransactionCode** | Pointer to [**HotelTransactionCodeType**](HotelTransactionCodeType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewHotelTransactionCode

`func NewHotelTransactionCode() *HotelTransactionCode`

NewHotelTransactionCode instantiates a new HotelTransactionCode object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelTransactionCodeWithDefaults

`func NewHotelTransactionCodeWithDefaults() *HotelTransactionCode`

NewHotelTransactionCodeWithDefaults instantiates a new HotelTransactionCode object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransactionCode

`func (o *HotelTransactionCode) GetTransactionCode() HotelTransactionCodeType`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *HotelTransactionCode) GetTransactionCodeOk() (*HotelTransactionCodeType, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *HotelTransactionCode) SetTransactionCode(v HotelTransactionCodeType)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *HotelTransactionCode) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.

### GetLinks

`func (o *HotelTransactionCode) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *HotelTransactionCode) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *HotelTransactionCode) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *HotelTransactionCode) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *HotelTransactionCode) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *HotelTransactionCode) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *HotelTransactionCode) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *HotelTransactionCode) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


