# AuthorizationHistory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FolioHistory** | Pointer to [**[]AuthorizationHistoryType**](AuthorizationHistoryType.md) | The collection of credit card history records. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewAuthorizationHistory

`func NewAuthorizationHistory() *AuthorizationHistory`

NewAuthorizationHistory instantiates a new AuthorizationHistory object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAuthorizationHistoryWithDefaults

`func NewAuthorizationHistoryWithDefaults() *AuthorizationHistory`

NewAuthorizationHistoryWithDefaults instantiates a new AuthorizationHistory object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFolioHistory

`func (o *AuthorizationHistory) GetFolioHistory() []AuthorizationHistoryType`

GetFolioHistory returns the FolioHistory field if non-nil, zero value otherwise.

### GetFolioHistoryOk

`func (o *AuthorizationHistory) GetFolioHistoryOk() (*[]AuthorizationHistoryType, bool)`

GetFolioHistoryOk returns a tuple with the FolioHistory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioHistory

`func (o *AuthorizationHistory) SetFolioHistory(v []AuthorizationHistoryType)`

SetFolioHistory sets FolioHistory field to given value.

### HasFolioHistory

`func (o *AuthorizationHistory) HasFolioHistory() bool`

HasFolioHistory returns a boolean if a field has been set.

### GetLinks

`func (o *AuthorizationHistory) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AuthorizationHistory) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AuthorizationHistory) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AuthorizationHistory) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AuthorizationHistory) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AuthorizationHistory) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AuthorizationHistory) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AuthorizationHistory) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


