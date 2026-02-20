# HotelTransactionGenerates

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TransactionGenerates** | Pointer to [**HotelTransactionGeneratesSetupType**](HotelTransactionGeneratesSetupType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewHotelTransactionGenerates

`func NewHotelTransactionGenerates() *HotelTransactionGenerates`

NewHotelTransactionGenerates instantiates a new HotelTransactionGenerates object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelTransactionGeneratesWithDefaults

`func NewHotelTransactionGeneratesWithDefaults() *HotelTransactionGenerates`

NewHotelTransactionGeneratesWithDefaults instantiates a new HotelTransactionGenerates object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransactionGenerates

`func (o *HotelTransactionGenerates) GetTransactionGenerates() HotelTransactionGeneratesSetupType`

GetTransactionGenerates returns the TransactionGenerates field if non-nil, zero value otherwise.

### GetTransactionGeneratesOk

`func (o *HotelTransactionGenerates) GetTransactionGeneratesOk() (*HotelTransactionGeneratesSetupType, bool)`

GetTransactionGeneratesOk returns a tuple with the TransactionGenerates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionGenerates

`func (o *HotelTransactionGenerates) SetTransactionGenerates(v HotelTransactionGeneratesSetupType)`

SetTransactionGenerates sets TransactionGenerates field to given value.

### HasTransactionGenerates

`func (o *HotelTransactionGenerates) HasTransactionGenerates() bool`

HasTransactionGenerates returns a boolean if a field has been set.

### GetLinks

`func (o *HotelTransactionGenerates) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *HotelTransactionGenerates) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *HotelTransactionGenerates) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *HotelTransactionGenerates) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *HotelTransactionGenerates) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *HotelTransactionGenerates) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *HotelTransactionGenerates) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *HotelTransactionGenerates) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


