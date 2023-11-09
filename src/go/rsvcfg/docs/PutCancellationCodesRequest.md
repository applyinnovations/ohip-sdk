# PutCancellationCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CancellationCodes** | Pointer to [**CancellationCodesType**](CancellationCodesType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutCancellationCodesRequest

`func NewPutCancellationCodesRequest() *PutCancellationCodesRequest`

NewPutCancellationCodesRequest instantiates a new PutCancellationCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutCancellationCodesRequestWithDefaults

`func NewPutCancellationCodesRequestWithDefaults() *PutCancellationCodesRequest`

NewPutCancellationCodesRequestWithDefaults instantiates a new PutCancellationCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCancellationCodes

`func (o *PutCancellationCodesRequest) GetCancellationCodes() CancellationCodesType`

GetCancellationCodes returns the CancellationCodes field if non-nil, zero value otherwise.

### GetCancellationCodesOk

`func (o *PutCancellationCodesRequest) GetCancellationCodesOk() (*CancellationCodesType, bool)`

GetCancellationCodesOk returns a tuple with the CancellationCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationCodes

`func (o *PutCancellationCodesRequest) SetCancellationCodes(v CancellationCodesType)`

SetCancellationCodes sets CancellationCodes field to given value.

### HasCancellationCodes

`func (o *PutCancellationCodesRequest) HasCancellationCodes() bool`

HasCancellationCodes returns a boolean if a field has been set.

### GetLinks

`func (o *PutCancellationCodesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutCancellationCodesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutCancellationCodesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutCancellationCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutCancellationCodesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutCancellationCodesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutCancellationCodesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutCancellationCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


