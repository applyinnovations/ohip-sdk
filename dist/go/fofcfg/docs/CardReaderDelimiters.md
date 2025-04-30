# CardReaderDelimiters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Delimiters** | Pointer to [**CardReaderDelimitersType**](CardReaderDelimitersType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCardReaderDelimiters

`func NewCardReaderDelimiters() *CardReaderDelimiters`

NewCardReaderDelimiters instantiates a new CardReaderDelimiters object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCardReaderDelimitersWithDefaults

`func NewCardReaderDelimitersWithDefaults() *CardReaderDelimiters`

NewCardReaderDelimitersWithDefaults instantiates a new CardReaderDelimiters object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDelimiters

`func (o *CardReaderDelimiters) GetDelimiters() CardReaderDelimitersType`

GetDelimiters returns the Delimiters field if non-nil, zero value otherwise.

### GetDelimitersOk

`func (o *CardReaderDelimiters) GetDelimitersOk() (*CardReaderDelimitersType, bool)`

GetDelimitersOk returns a tuple with the Delimiters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDelimiters

`func (o *CardReaderDelimiters) SetDelimiters(v CardReaderDelimitersType)`

SetDelimiters sets Delimiters field to given value.

### HasDelimiters

`func (o *CardReaderDelimiters) HasDelimiters() bool`

HasDelimiters returns a boolean if a field has been set.

### GetLinks

`func (o *CardReaderDelimiters) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CardReaderDelimiters) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CardReaderDelimiters) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CardReaderDelimiters) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CardReaderDelimiters) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CardReaderDelimiters) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CardReaderDelimiters) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CardReaderDelimiters) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


