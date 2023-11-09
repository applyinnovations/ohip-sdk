# PutAddressFormatsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Formats** | Pointer to [**AddressFormatsType**](AddressFormatsType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutAddressFormatsRequest

`func NewPutAddressFormatsRequest() *PutAddressFormatsRequest`

NewPutAddressFormatsRequest instantiates a new PutAddressFormatsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutAddressFormatsRequestWithDefaults

`func NewPutAddressFormatsRequestWithDefaults() *PutAddressFormatsRequest`

NewPutAddressFormatsRequestWithDefaults instantiates a new PutAddressFormatsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFormats

`func (o *PutAddressFormatsRequest) GetFormats() AddressFormatsType`

GetFormats returns the Formats field if non-nil, zero value otherwise.

### GetFormatsOk

`func (o *PutAddressFormatsRequest) GetFormatsOk() (*AddressFormatsType, bool)`

GetFormatsOk returns a tuple with the Formats field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormats

`func (o *PutAddressFormatsRequest) SetFormats(v AddressFormatsType)`

SetFormats sets Formats field to given value.

### HasFormats

`func (o *PutAddressFormatsRequest) HasFormats() bool`

HasFormats returns a boolean if a field has been set.

### GetLinks

`func (o *PutAddressFormatsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutAddressFormatsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutAddressFormatsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutAddressFormatsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutAddressFormatsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutAddressFormatsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutAddressFormatsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutAddressFormatsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


