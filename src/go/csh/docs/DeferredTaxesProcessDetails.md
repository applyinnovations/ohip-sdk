# DeferredTaxesProcessDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**ProcessId** | Pointer to **string** | Used for Character Strings, length 0 to 40. | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewDeferredTaxesProcessDetails

`func NewDeferredTaxesProcessDetails() *DeferredTaxesProcessDetails`

NewDeferredTaxesProcessDetails instantiates a new DeferredTaxesProcessDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeferredTaxesProcessDetailsWithDefaults

`func NewDeferredTaxesProcessDetailsWithDefaults() *DeferredTaxesProcessDetails`

NewDeferredTaxesProcessDetailsWithDefaults instantiates a new DeferredTaxesProcessDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *DeferredTaxesProcessDetails) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *DeferredTaxesProcessDetails) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *DeferredTaxesProcessDetails) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *DeferredTaxesProcessDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetProcessId

`func (o *DeferredTaxesProcessDetails) GetProcessId() string`

GetProcessId returns the ProcessId field if non-nil, zero value otherwise.

### GetProcessIdOk

`func (o *DeferredTaxesProcessDetails) GetProcessIdOk() (*string, bool)`

GetProcessIdOk returns a tuple with the ProcessId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessId

`func (o *DeferredTaxesProcessDetails) SetProcessId(v string)`

SetProcessId sets ProcessId field to given value.

### HasProcessId

`func (o *DeferredTaxesProcessDetails) HasProcessId() bool`

HasProcessId returns a boolean if a field has been set.

### GetWarnings

`func (o *DeferredTaxesProcessDetails) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *DeferredTaxesProcessDetails) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *DeferredTaxesProcessDetails) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *DeferredTaxesProcessDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


