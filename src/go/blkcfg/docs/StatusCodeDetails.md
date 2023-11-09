# StatusCodeDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockStatusCodes** | Pointer to [**BlockStatusCodeListType**](BlockStatusCodeListType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewStatusCodeDetails

`func NewStatusCodeDetails() *StatusCodeDetails`

NewStatusCodeDetails instantiates a new StatusCodeDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStatusCodeDetailsWithDefaults

`func NewStatusCodeDetailsWithDefaults() *StatusCodeDetails`

NewStatusCodeDetailsWithDefaults instantiates a new StatusCodeDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockStatusCodes

`func (o *StatusCodeDetails) GetBlockStatusCodes() BlockStatusCodeListType`

GetBlockStatusCodes returns the BlockStatusCodes field if non-nil, zero value otherwise.

### GetBlockStatusCodesOk

`func (o *StatusCodeDetails) GetBlockStatusCodesOk() (*BlockStatusCodeListType, bool)`

GetBlockStatusCodesOk returns a tuple with the BlockStatusCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockStatusCodes

`func (o *StatusCodeDetails) SetBlockStatusCodes(v BlockStatusCodeListType)`

SetBlockStatusCodes sets BlockStatusCodes field to given value.

### HasBlockStatusCodes

`func (o *StatusCodeDetails) HasBlockStatusCodes() bool`

HasBlockStatusCodes returns a boolean if a field has been set.

### GetLinks

`func (o *StatusCodeDetails) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *StatusCodeDetails) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *StatusCodeDetails) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *StatusCodeDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *StatusCodeDetails) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *StatusCodeDetails) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *StatusCodeDetails) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *StatusCodeDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


