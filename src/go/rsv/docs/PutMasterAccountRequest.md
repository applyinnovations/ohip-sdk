# PutMasterAccountRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**MasterAccount** | Pointer to [**MasterAccountType**](MasterAccountType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutMasterAccountRequest

`func NewPutMasterAccountRequest() *PutMasterAccountRequest`

NewPutMasterAccountRequest instantiates a new PutMasterAccountRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutMasterAccountRequestWithDefaults

`func NewPutMasterAccountRequestWithDefaults() *PutMasterAccountRequest`

NewPutMasterAccountRequestWithDefaults instantiates a new PutMasterAccountRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutMasterAccountRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutMasterAccountRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutMasterAccountRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutMasterAccountRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMasterAccount

`func (o *PutMasterAccountRequest) GetMasterAccount() MasterAccountType`

GetMasterAccount returns the MasterAccount field if non-nil, zero value otherwise.

### GetMasterAccountOk

`func (o *PutMasterAccountRequest) GetMasterAccountOk() (*MasterAccountType, bool)`

GetMasterAccountOk returns a tuple with the MasterAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterAccount

`func (o *PutMasterAccountRequest) SetMasterAccount(v MasterAccountType)`

SetMasterAccount sets MasterAccount field to given value.

### HasMasterAccount

`func (o *PutMasterAccountRequest) HasMasterAccount() bool`

HasMasterAccount returns a boolean if a field has been set.

### GetWarnings

`func (o *PutMasterAccountRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutMasterAccountRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutMasterAccountRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutMasterAccountRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


